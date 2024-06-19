import { DataSourceOptions, DataSource } from 'typeorm';    
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || ''),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['dist/entities/*.entity.js'],
  migrationsTableName: 'migration',
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true, // Set this to false in production
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
