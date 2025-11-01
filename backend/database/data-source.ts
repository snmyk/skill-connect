import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserEntity } from '../models/user.model'; // your EntitySchema file

// Initialize the TypeORM Data Source
export const AppDataSource = new DataSource({
  type: 'postgres',                // Database type (can be mysql, sqlite, etc.)
  host: 'localhost',
  port: 5432,
  username: 'postgres',            // your DB username
  password: 'Password@1',            // your DB password
  database: 'skill_connect',  // your DB name
  synchronize: false,               // auto sync entities -> tables (dev only)
  logging: false,
  entities: ['./models/**/*.ts'],          // register your entities here
  migrations: ['./migrations/**/*.ts'],
  subscribers: [],
});
