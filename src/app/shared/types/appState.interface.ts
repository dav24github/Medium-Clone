import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popularTags/types/popularTagsState.Interface';
import { ArticleInterface } from './article.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  article: ArticleInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
}
