import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ServiceProductService } from '../services/service-product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  listProduct: Product[] = [];
  produitService: ServiceProductService;

  constructor(private productService: ServiceProductService) {
    this.produitService = productService;
  }

  ngOnInit(): void {
    this.listProduct = this.produitService.getAllProduits();
  }
}
