import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST || 'localhost', // ✅ fallback
    dialect: 'postgres',
    logging: false,
  }
);

export default sequelize;
