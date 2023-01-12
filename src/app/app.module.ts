import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { RadmonNumberComponent } from './random-number/random-number.component';
import { CustomRouteReuseStrategy } from './service/custom-route-reuse-strategy';

const routes: Routes = [
  {
    path: 'random-number-first',
    component: RadmonNumberComponent,
  },
  {
    path: 'random-number-second',
    component: RadmonNumberComponent,
  },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,  RadmonNumberComponent],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
  ]
})
export class AppModule { }
