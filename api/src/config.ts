import * as dotenv from 'dotenv';

export type Nullable<T> = T | null;
export type IndexedObject = Record<string, any>;

export const defineEnvs = <T>(envs: T): Nullable<T | any> => {
    try {
        dotenv.config();
    } catch (except) {
        console.error('Unable to read .env file. Assuming our context is within docker!');
    }

    const cfg: T | IndexedObject = {};

    Object.keys(envs).forEach((key) => {
        if (process.env[key]) {
            cfg[key] = process.env[key?.toString()];
        }
    });

    return cfg;
};