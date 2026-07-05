import { AppDataSource } from "../config/data-source.js";
import Role from "../entities/roles.js";
import { ROLES } from "../constants/roles.js";


export async function seedRoles() {
  const roleRepository = AppDataSource.getRepository(Role);

  const roles = [
    {
      name: ROLES.ADMIN,
    },
    {
      name: ROLES.USER,
    },
  ];

  for (const role of roles) {
    const existingRole = await roleRepository.findOne({
      where: { name: role.name },
    });

    if (!existingRole) {
      await roleRepository.save(role);
      console.log(`✅ ${role.name} role created`);
    } else {
      console.log(`ℹ️ ${role.name} role already exists`);
    }
  }
}