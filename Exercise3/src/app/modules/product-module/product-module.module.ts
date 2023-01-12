import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../product-list/product-list.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { CategoryFilterPipe } from 'src/app/pipes/category-filter.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CategoryFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModuleModule { }
