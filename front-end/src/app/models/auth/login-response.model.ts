export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  jwtToken: string;
  refreshToken: string;
  userRole: string;
  errors: string | null;
}
