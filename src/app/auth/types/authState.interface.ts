import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorInterface } from '../../shared/types/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorInterface | null;
  isLoading: boolean;
}
