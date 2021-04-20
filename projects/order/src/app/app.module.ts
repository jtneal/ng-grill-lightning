import { NgModule, ApplicationRef, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';
import { MicroFrontendModule } from 'ng-micro-frontend';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicroFrontendModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap { 
  public constructor(
    private readonly injector: Injector
  ) { }

  public ngDoBootstrap(appRef: ApplicationRef): void {
    if (environment.production) {
      const customElement = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('custom-order', customElement);
    } else {
      appRef.bootstrap(AppComponent);
    }
  }

}
