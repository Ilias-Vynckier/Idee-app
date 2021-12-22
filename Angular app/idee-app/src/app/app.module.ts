import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeeMaterialDesignModule } from './idee-material-design/idee-material-design.module';

import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { menuReducer } from './state/menu.reducer';
import { ideeReducer } from './state/idee.reducer';
import { IdeeEffects } from './state/idee.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    IdeeMaterialDesignModule,
    RouterTestingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    /*StoreModule.forRoot({ menu: menuReducer ,  idee: ideeReducer },{}),
    EffectsModule.forRoot([IdeeEffects]),*/
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
