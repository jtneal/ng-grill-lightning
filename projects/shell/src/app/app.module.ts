import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroFrontendModule } from 'ng-micro-frontend';
import { MicroFrontendNavComponent } from './micro-frontend-nav/micro-frontend-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MicroFrontendNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicroFrontendModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
