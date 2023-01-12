import { Component } from '@angular/core';
import { product } from '../types';
import { ProductService } from '../services/ProductService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers : [ProductService]
})
export class ProductListComponent {


  products  : product [] =  this.productService.getProductList();
  categories : string []  = [] ;
  selectedCategorie : string  = "";


  constructor(private productService  : ProductService , private router : Router) {
    this.getCategorie();
  }

  addProduct(product : product){
    this.products.push(product);
  }


  navigate(product : product) {
    this.router.navigate(["/detail-product"],{state:{product}});
  }


  getCategorie(){
    this.products.forEach((element)=>{
      this.categories.push(element.category);
    })

    return this.categories = this.categories.filter((element, index) => {
      return this.categories.indexOf(element) === index;
    })
  }


  selectCategorie(event:any) {
    this.selectedCategorie  =  event.target.value;
  }
}
