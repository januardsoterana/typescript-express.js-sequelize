import {
    Column,
    DataType,
    Model,
    Table,
    BelongsTo,
} from 'sequelize-typescript';

import { ProjectInfo } from './project_info';

@Table({ timestamps: true, tableName: 'project_location_info' })
export class ProjectLocationInfo extends Model {
    @Column({
        type: DataType.UUID,
        allowNull: false,
        primaryKey: true,
    })
    project_id!: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    latitude!: number;

    @Column({ type: DataType.FLOAT, allowNull: false })
    longitude!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    country_code!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    city!: string;

    @BelongsTo(() => ProjectInfo, 'project_id')
    project_info!: ProjectInfo;
}
