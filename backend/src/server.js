// src/server.js
import dotenv from "dotenv";
import app from "./app.js";
import { AppDataSource } from "./config/data-source.js";

dotenv.config({ path: ".env.local" });

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });