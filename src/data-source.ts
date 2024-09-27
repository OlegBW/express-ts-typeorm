import { DataSource } from 'typeorm';
import path from 'path';
import 'reflect-metadata';

const dbPath = path.join(__dirname, 'data/database.sqlite');

export const dataSource = new DataSource({
  type: 'sqlite',
  database: dbPath,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entities/*.ts'],
});
