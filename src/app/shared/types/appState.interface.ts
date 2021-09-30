import { CreateArticleStateInterface } from 'src/app/createArticle/types/createArticleState.interface';
import { EditArticleStateInterface } from 'src/app/editArticle/types/editArticleState.interface';
import { SettingStateInterface } from 'src/app/settings/types/settingState.interface';
import { UserProfileInterface } from 'src/app/userProfile/types/userProfile.interface';
import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popularTags/types/popularTagsState.Interface';
import { ArticleInterface } from './article.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  article: ArticleInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingStateInterface;
  userProfile: UserProfileInterface;
}
