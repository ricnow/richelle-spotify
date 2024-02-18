import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppRotas } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(AppRotas)]
};
