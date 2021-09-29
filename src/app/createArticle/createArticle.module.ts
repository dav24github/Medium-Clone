import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm/articleForm.module';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { CreateArticleService } from './services/crearteArticle.service';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
