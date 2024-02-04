import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './components/list/state/product.effects';
import { productReducer } from './components/list/state/product.reducer';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './components/list/product-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ product: productReducer }),
    provideEffects(ProductEffects),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(ProductData, { delay: 1000 })
    ),
  ],
};
