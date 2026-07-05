import { AppDataSource } from "../config/data-source.js";
import { seedRoles } from "../seeders/role.seeder.js";

async function runSeed() {
  try {
    await AppDataSource.initialize();

    console.log("✅ Database connected");

    await seedRoles();

    await AppDataSource.destroy();

    console.log("✅ Seeding completed");
  } catch (error) {
    console.error(error);
  }
}

runSeed();