import * as dotenv from 'dotenv';

export type Nullable<T> = T | null;
export type IndexedObject = Record<string, any>;

export const defineEnvs = <T>(envs: T): Nullable<T | any> => {
    dotenv.config();

    const cfg: T | IndexedObject = {};

    Object.keys(envs).forEach((key) => {
        if (!process.env[key]) {
            return null;
        }

        cfg[key] = process.env[key?.toString()];
    });

    return cfg;
};