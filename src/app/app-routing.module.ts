import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[

  {
    path:'revendeur',
     loadChildren:()=>import('./revendeur/revendeur.module').then(m=>m.RevendeurModule)
  },




]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
