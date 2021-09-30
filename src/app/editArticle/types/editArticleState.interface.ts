import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';

export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorInterface | null;
}
