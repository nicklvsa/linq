import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { log, LogLevel } from './logger';
import { defineEnvs } from './config';
import { handleQueue } from './routes/queue/route';
import { handleIndex } from './routes/general/route';
import { createConnection } from 'typeorm';

// attempt to define the env vars using the provided type
const envVars = {
    SERVER_PORT: String,
} as const;

const envs = defineEnvs<typeof envVars>(envVars);

// if envs it not defined, there was a problem finding all of the envs
if (!envs) {
    log<string>('Could not initialize environment!', LogLevel.FATAL);
}

// initialize the database connection
createConnection().then(async (connection) => {
    await connection.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
}).catch((err) => {
    log<string>(`Unable to initialize database connection! Error: ${err}`, LogLevel.FATAL);
});

// convert port to an int, default to port 8080
const portNum = parseInt(envs?.SERVER_PORT || '8080', 10);

// setup express and middleware
const app = express();
app.use(express.json);
app.use(helmet);
app.use(cors());

// define all routes
app.get('/', handleIndex);
app.post('/queue/:id', handleQueue);

// attempt to start the server
app.listen(portNum, () => {
    log<string>(`Listening on ${portNum}`, LogLevel.INFO);
});