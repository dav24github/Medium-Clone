import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { SettingsComponent } from './components/settings/settings.component';
import { reducers } from './store/reducers';

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    BackendErrorMessagesModule,
    ReactiveFormsModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
