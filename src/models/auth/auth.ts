import { User } from "../user";

interface AuthState {
  employee: User | null;
  authenticated: boolean;
}
export type { AuthState };
