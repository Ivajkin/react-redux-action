import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {RealtyMapComponent} from "./components/realty-map/realty-map.component";


export const appRoutes: Routes = [
  { path: 'realty-map',   component: RealtyMapComponent, pathMatch: 'full' },
  { path: 'about',   component: AboutComponent, pathMatch: 'full' },
  { path: '',   component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
