import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";

import {PageNotFoundComponent} from "./components/not-found.component";
import {RestHttp} from "./dataTrasnsport/restHttp";
import {StartLoadingComponent} from "./components/start-loading.component";
import {HeaderComponent} from "./components/header/header.component";


@NgModule({
  declarations: [
    StartLoadingComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    //todo: useless, some time ago was some back with <router-outlet> loads. Need to check and delete if all ok.
    RouterModule,
  ],
  providers: [
    RestHttp,
  ],
  exports: [
    StartLoadingComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ]
})
export class AppCommonModule { }
