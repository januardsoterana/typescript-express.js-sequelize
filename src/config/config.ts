import { config as envConfig } from 'dotenv';

envConfig();

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
    },
    openweathermap: {
        base_url: 'https://api.openweathermap.org/data/2.5',
        api_key: process.env.OPENWEATHERMAP_API_KEY,
    },
};

export default config;
