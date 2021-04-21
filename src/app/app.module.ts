import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoverComponent} from './shared/cover/cover.component';
import {StepsComponent} from './shared/steps/steps.component';
import {HomeComponent} from './pages/home/home.component';
import {ButtonComponent} from './shared/button/button.component';
import {OverlineComponent} from './shared/overline/overline.component';
import {FigureComponent} from './shared/figure/figure.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './shared/header/header.component';
import {LogoComponent} from './shared/logo/logo.component';
import {LoadingComponent} from './shared/loading/loading.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CoverComponent,
    FigureComponent,
    HomeComponent,
    OverlineComponent,
    StepsComponent,
    HeaderComponent,
    LogoComponent,
    LoadingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
