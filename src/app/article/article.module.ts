import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './components/article/article.component';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { articleFeatureKey } from './store/selectors';
import { reducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { TagListModule } from '../shared/modules/tagList/loading.module';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { ArticleService } from './services/article.service';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(articleFeatureKey, reducer),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
