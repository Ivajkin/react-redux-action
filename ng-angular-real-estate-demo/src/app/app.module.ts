import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppCommonModule} from "modules/appCommon/appCommon.module";
import {AppRoutingModule} from "./appRouting.module";
import { MarkersRouteComponent } from './components/markers-route/markers-route.component';
import { RealtyMapComponent } from './components/realty-map/realty-map.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MarkersRouteComponent,
    RealtyMapComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,

    AppCommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
