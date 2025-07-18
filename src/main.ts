import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { defineCustomElements } from 'ionicons/loader';

defineCustomElements(window);
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
