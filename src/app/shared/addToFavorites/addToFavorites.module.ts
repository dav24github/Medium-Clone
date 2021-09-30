import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component';
import { addToFavoritesEffect } from './effects/addToFavorites.effects';
import { AddToFavoritesService } from './services/addToFavorites.service';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([addToFavoritesEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
