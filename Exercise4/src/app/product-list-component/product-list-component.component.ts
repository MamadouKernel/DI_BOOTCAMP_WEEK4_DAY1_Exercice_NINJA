import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
  products =[
    {
      name :'Iphone 7',
      price:200
    },
    {
      name :'Samsung A22',
      price:300
    },
    {
      name :'Itel P22',
      price:450
    },
    {
      name :'Tecno R7',
      price:550
    },
    
    {
      name :'Iphone 11',
      price:600
    },
    {
      name :'Huawei Lite Super',
      price:800
    },{
      name :'Tecno R7',
      price:550
    },
  ]

min!:number
max!:number
order:number=1
name!:string
price!:number
  addProduct(){
   
   /* let valueName= (<HTMLInputElement>document.getElementById("name")).value;
   let valuePrice= parseInt((<HTMLInputElement>document.getElementById("price")).value); */
   this.products.push({name:this.name,price:this.price})
   this.products=this.products
  }
}
