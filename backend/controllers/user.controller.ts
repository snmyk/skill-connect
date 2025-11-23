import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { AppDataSource } from '../database/data-source'; // your TypeORM data source file
import { UserEntity, User } from '../models/user.model'; // from the EntitySchema we made
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

const userRepository = AppDataSource.getRepository(UserEntity);

// Create User
export const createUser = async (req: Request<{}, {}, CreateUserDto>, res: Response): Promise<Response> => {
  try {
    const { email, firebase_id } = req.body;

    if (!email || !firebase_id) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newUser: Partial<User> = {
      user_id: uuidv4(),
      email,
      firebase_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const savedUser = await userRepository.save(newUser);

    console.log('Created new user:', savedUser);
    return res.status(201).json(savedUser);
  } catch (error: any) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Failed to create user. ' + error.message });
  }
};

// Update User
export const updateUser = async (req: Request<{}, {}, UpdateUserDto>, res: Response): Promise<Response> => {
  console.log('Request body:', req.body);
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
    const { phone, display_name, date_of_birth, gender, location } = req.body;

    const user = await userRepository.findOne({ where: { user_id: id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    Object.assign(user, {
      phone,
      display_name,
      date_of_birth,
      gender,
      location,
      updated_at: new Date(),
    });

    const updatedUser = await userRepository.save(user);

    return res.status(200).json(updatedUser);
  } catch (error: any) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Failed to update user. ' + error.message });
  }
};

// Get All Users
export const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const users = await userRepository.find();
    return res.status(200).json(users);
  } catch (error: any) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ error: 'Failed to fetch users. ' + error.message });
  }
};
