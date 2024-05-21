import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {AppRoutingModule} from "./app/app-routing.module";

bootstrapApplication(AppComponent, {providers:[importProvidersFrom(HttpClientModule, AppRoutingModule)]})
  .catch((err) => console.error(err));
