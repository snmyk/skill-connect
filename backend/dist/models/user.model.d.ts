import { EntitySchema } from 'typeorm';
export interface User {
    user_id: string;
    email: string;
    phone?: string | null;
    display_name?: string | null;
    date_of_birth?: Date | null;
    gender?: string | null;
    location?: object | null;
    firebase_id?: string | null;
    created_at: Date;
    updated_at: Date;
}
export declare const UserEntity: EntitySchema<User>;
export default UserEntity;
//# sourceMappingURL=user.model.d.ts.map