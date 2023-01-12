import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:"list-product",
    component : ProductListComponent
  }
  ,
  {
    path : "",
    redirectTo : "list-product",
    pathMatch : "full"
  },
  {
    path : "detail-product",
    component : ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
