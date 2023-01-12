import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { product } from '../types';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent  implements OnInit{


  product ?: product;

  constructor(private router  : Router){
    const extras :any  = this.router.getCurrentNavigation()?.extras.state;
    this.product = extras?.product;
  }

  ngOnInit(): void {
  }

}
