import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { reducers } from './store/reducers';
import { authfeatureKey } from './store/selectors';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistance.service';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(authfeatureKey, reducers), //import the reducers
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService]
})
export class AuthModule {}
