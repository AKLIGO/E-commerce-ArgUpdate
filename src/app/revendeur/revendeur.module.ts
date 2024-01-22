import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevendeurRoutingModule } from './revendeur-routing.module';
import { RevendeurComponent } from '../revendeur/revendeur.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { ProductsComponent } from './products/products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CommandsComponent } from './commands/commands.component';
import { VentesComponent } from './ventes/ventes.component';


@NgModule({
  declarations: [
    RevendeurComponent,
    SideBarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DashboardComponent,
    ProfilComponent,
    ProductsComponent,
    ListProductsComponent,
    CommandsComponent,
    VentesComponent
  ],
  imports: [
    CommonModule,
    RevendeurRoutingModule
  ]
})
export class RevendeurModule { }
