import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const dataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,      // or DB_USERNAME if that's your env variable
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ["src/entities/*.js"],
  migrations: ["src/migrations/*.js"],
};


export const AppDataSource = new DataSource(dataSourceOptions);