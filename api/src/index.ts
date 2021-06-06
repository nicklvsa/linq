import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { log, LogLevel } from './logger';
import { defineEnvs } from './config';
import { handleQueue } from './routes/queue/route';
import { handleIndex } from './routes/general/route';

// attempt to define the env vars using the provided type
const envVars = {
    SERVER_PORT: String,
} as const;

const envs = defineEnvs<typeof envVars>(envVars);

// if envs it not defined, there was a problem finding all of the envs
if (!envs) {
    log('Could not initialize environment!', LogLevel.FATAL);
}

// convert port to an int, default to port 8080
const portNum = parseInt(envs?.SERVER_PORT || '8080', 10);

// setup express and middleware
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

// define all routes
app.get('/', handleIndex);
app.post('/queue/get/:id', handleQueue);

// attempt to start the server
app.listen(portNum, () => {
    log(`Listening on ${portNum}`, LogLevel.INFO);
});