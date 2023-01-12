import { Injectable } from '@angular/core';
import { product } from '../types';

@Injectable()
export class ProductService {

  products  : product[] =  [
    {
      name   : "iphone",
      price  : 200,
      category : "phone"
    },
    {
      name   : "iphone 12",
      price  : 200,
      category : "phone"
    },
    {
      name   : "Air max",
      price  : 200,
      category : "shoe"
    }
  ]



  getProductList(){
    return this.products;
  }

}
