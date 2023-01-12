import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'accueil', loadChildren: ()=> import('./product/product.module').then((m)=> m.ProductModule)},
  {path:'', loadChildren: ()=> import('./product/product.module').then((m)=> m.ProductModule)},
  {path:'**', loadChildren: ()=> import('./product/product.module').then((m)=> m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
