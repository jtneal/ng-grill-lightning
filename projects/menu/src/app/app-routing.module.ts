import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NullComponent } from 'ng-micro-frontend';

import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { LunchComponent } from './lunch/lunch.component';

const mfeRoutes: Routes = [
  { component: BreakfastComponent, path: 'breakfast' },
  { component: LunchComponent, path: 'lunch' },
  { component: DinnerComponent, path: 'dinner' },
];

const routes: Routes = [
  { children: mfeRoutes, path: 'menu' },
  { component: NullComponent, path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
