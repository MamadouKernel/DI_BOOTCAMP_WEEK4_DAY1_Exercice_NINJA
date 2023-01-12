import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productForms: FormGroup;
  products: Product[];
  loading: boolean = false;
  visible: boolean = false;
  constructor(private productForm: FormBuilder,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productForms = this.productForm.group({
        nom:['',Validators.required],
        prix:['',Validators.required]
    })
  }

  addProduct(): void{
  }

  ouvrirModaleEdition() {
    this.visible = !this.visible
  }
}
