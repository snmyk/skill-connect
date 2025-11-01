import { Router } from 'express';
import { getAllUsers, createUser, updateUser } from '../controllers/user.controller';

const router: Router = Router();

// Define routes with proper typing
router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);

export default router;
