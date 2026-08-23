export interface AuthState {
  isAuthenticated: boolean;
  triggerAuthenticationModal: boolean;
  loading: boolean;
  error: string | null;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userRole: string;
    jwtToken: string;
    refreshToken: string;
  } | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  triggerAuthenticationModal: false,
  user: null,
  loading: false,
  error: null,
};
