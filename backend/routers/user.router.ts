import { Router } from 'express';
import { getAllUsers, createUser, updateUser } from '../controllers/user.controller';

const router: Router = Router();

router.get('/get_users', getAllUsers);
router.post('/register_user', createUser);
router.put('/users/:id', updateUser);

export default router;
