import { Model, Table, Column, DataType, HasOne } from 'sequelize-typescript';

import { ProjectLocationInfo } from './project_location_info';

@Table({ timestamps: true, tableName: 'project_info' })
export class ProjectInfo extends Model {
    @Column({
        type: DataType.UUID,
        allowNull: false,
        primaryKey: true,
    })
    project_id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    project_name!: string;

    @HasOne(() => ProjectLocationInfo, 'project_id')
    location!: ProjectLocationInfo;
}
