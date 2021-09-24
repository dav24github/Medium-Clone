import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { getFeedEffect } from './store/effects/getFeed.effect';
import { reducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([getFeedEffect]),
    StoreModule.forFeature('feed', reducer),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
