
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
