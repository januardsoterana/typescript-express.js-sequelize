import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import router from '../routes';

dotenv.config();

/**
 *
 * App Variable
 */

if (!process.env.PORT) {
    process.exit(1);
}

const app: Express = express();

/**
 *
 * App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

export default app;
