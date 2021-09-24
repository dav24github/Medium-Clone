import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { getFeedEffect } from './store/effects/getFeed.effect';
import { reducer } from './store/reducers';
import { feedFeatureKey } from './store/selectors';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([getFeedEffect]),
    StoreModule.forFeature(feedFeatureKey, reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
