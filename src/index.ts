import 'reflect-metadata';
import app from './config/express';
import config from './config/config';
import db_connection from './config/database';

const port = config.port || 8000;

const start = async (): Promise<void> => {
    await db_connection.sync();
    app.listen(port, () => {
        console.log(
            `⚡️[server]: Server is running at http://localhost:${port}`,
        );
    });
};

void start();
