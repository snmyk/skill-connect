import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { reducers } from './store';
import { provideStore } from '@ngrx/store';
import { AuthEffects } from './store/auth/auth.effects';
import { RegistrationEffects } from './store/registration-store/registration.effect';
import { provideEffects } from '@ngrx/effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FirebaseConfig } from '../FirebaseConfig';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(FirebaseConfig.firebase)),
    provideAuth(() => getAuth()),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(reducers),
    provideEffects([AuthEffects, RegistrationEffects]),
  ],
};
