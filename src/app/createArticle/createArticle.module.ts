import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm/articleForm.module';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { CreateArticleService } from './services/crearteArticle.service';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { reducers } from './store/reducer';
import { createArticlefeatureKey } from './store/selectors';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature(createArticlefeatureKey, reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
