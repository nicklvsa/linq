export enum LogLevel {
    INFO,
    WARN,
    ERROR,
    FATAL,
};

export const log = <T>(msg: T, level: LogLevel, requestID?: string) => {
    let template = `
        [${LogLevel[level].toString()}] - ${msg}
    `.trim();

    if (requestID) {
        template = `(${requestID}) ${template}`;
    }

    console.log(template);

    if (level === LogLevel.FATAL) {
        process.exit(1);
    }
};