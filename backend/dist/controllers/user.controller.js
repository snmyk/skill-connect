"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.updateUser = exports.createUser = void 0;
const uuid_1 = require("uuid");
const data_source_1 = require("../database/data-source"); // your TypeORM data source file
const user_model_1 = require("../models/user.model"); // from the EntitySchema we made
const userRepository = data_source_1.AppDataSource.getRepository(user_model_1.UserEntity);
// Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, firebase_id } = req.body;
        if (!email || !firebase_id) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const newUser = {
            user_id: (0, uuid_1.v4)(),
            email,
            firebase_id,
            created_at: new Date(),
            updated_at: new Date(),
        };
        const savedUser = yield userRepository.save(newUser);
        console.log('Created new user:', savedUser);
        return res.status(201).json(savedUser);
    }
    catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Failed to create user. ' + error.message });
    }
});
exports.createUser = createUser;
// Update User
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Request body:', req.body);
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ error: 'User ID is required.' });
    }
    try {
        const { phone, display_name, date_of_birth, gender, location } = req.body;
        const user = yield userRepository.findOne({ where: { user_id: id } });
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
        const updatedUser = yield userRepository.save(user);
        return res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Failed to update user. ' + error.message });
    }
});
exports.updateUser = updateUser;
// Get All Users
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userRepository.find();
        return res.status(200).json(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ error: 'Failed to fetch users. ' + error.message });
    }
});
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.controller.js.map