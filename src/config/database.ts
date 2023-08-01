import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { ProjectInfo } from '../models/project_info';
import { ProjectLocationInfo } from '../models/project_location_info';
import config from './config';

const sequelizeModuleOptions: SequelizeOptions = {
    dialect: 'postgres',
    host: config.db.host,
    port: parseInt(config.db.port || '5432'),
    username: config.db.user || 'postgres',
    password: config.db.password,
    database: config.db.database,
    sync: { force: false },
    models: [ProjectInfo, ProjectLocationInfo],
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
};

const db_connection = new Sequelize(sequelizeModuleOptions);

export default db_connection;
