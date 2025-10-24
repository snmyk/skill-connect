export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  loading: boolean;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};
