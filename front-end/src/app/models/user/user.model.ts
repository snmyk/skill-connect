export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userRole: string;
  username: string | null;
  jwtToken: string | null;
  refreshToken: string | null;
}
