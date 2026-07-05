import { AppDataSource } from "../config/data-source.js";
import User from "../entities/users.js";
import Role from "../entities/roles.js";

export async function signUp(firebaseUser, body) {
  const userRepository = AppDataSource.getRepository(User);
  const roleRepository = AppDataSource.getRepository(Role);

  const existingUser = await userRepository.findOne({
    where: {
      firebaseUid: firebaseUser.uid,
    },
  });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  const userRole = await roleRepository.findOne({
    where: {
      name: "user",
    },
  });

  if (!userRole) {
    throw new Error("Default role not found.");
  }

  const user = userRepository.create({
    firebaseUid: firebaseUser.uid,
    email: firebaseUser.email,
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber,
    location: body.location,
    role: userRole,
  });

  return await userRepository.save(user);
}