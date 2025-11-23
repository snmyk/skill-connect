export interface CreateUserDto {
    email: string;
    firebase_id: string;
}
export interface UpdateUserDto {
    phone?: string;
    display_name?: string;
    date_of_birth?: Date;
    gender?: string;
    location?: object;
    id: string;
}
//# sourceMappingURL=user.dto.d.ts.map