import { Request, Response } from 'express';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare const createUser: (req: Request<{}, {}, CreateUserDto>, res: Response) => Promise<Response>;
export declare const updateUser: (req: Request<{}, {}, UpdateUserDto>, res: Response) => Promise<Response>;
export declare const getAllUsers: (_req: Request, res: Response) => Promise<Response>;
//# sourceMappingURL=user.controller.d.ts.map