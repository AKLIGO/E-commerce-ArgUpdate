import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsComponent } from './commands/commands.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsComponent } from './products/products.component';
import { ProfilComponent } from './profil/profil.component';
import { RevendeurComponent } from './revendeur.component';
import { VentesComponent } from './ventes/ventes.component';

const routes: Routes = [
  {
    path:'', component:RevendeurComponent, children:[{

      path:'produits', component:ProductsComponent

    },

    {
      path:'list-produits', component:ListProductsComponent
    },
    {
      path:'profil', component:ProfilComponent
    },

    {
      path:'dashboard', component:DashboardComponent
    },

    {
      path:'ventes', component:VentesComponent
    },

    {
      path:'commands', component:CommandsComponent
    }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevendeurRoutingModule { }
