import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm/articleForm.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { EditArticleComponent } from './components/editeArticle/editArticle.component';
import { EditArticleService } from './services/editArticle.service';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { reducers } from './store/reducer';
import { editArticlefeatureKey } from './store/selectors';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature(editArticlefeatureKey, reducers),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
