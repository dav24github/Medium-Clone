import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { updateArticleAction } from '../../store/actions/updateArticle.action';
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent {
  initialValues$!: Observable<ArticleInputInterface | null>;
  isSubmitting$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorInterface | null>;
  slug!: string | null;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      // filter(Boolean), // end pipe if get undefined or null
      map((article: ArticleInterface | null) => {
        if (article === null) return null;
        else
          return {
            title: article.title,
            description: article.description,
            body: article.body,
            tagList: article.tagList,
          };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug || '' }));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(
      updateArticleAction({ slug: this.slug || '', articleInput })
    );
  }
}
