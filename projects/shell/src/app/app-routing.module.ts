import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteFactory } from 'ng-micro-frontend';

const routes: Routes = [
  RouteFactory.createRoute('menu', 'http://localhost:4210'),
  RouteFactory.createRoute('order', 'http://localhost:4220'),
  RouteFactory.createRoute('locations', 'http://localhost:4230'),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
