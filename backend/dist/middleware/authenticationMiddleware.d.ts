import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';
declare module 'express-serve-static-core' {
    interface Request {
        user?: admin.auth.DecodedIdToken;
    }
}
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=authenticationMiddleware.d.ts.map