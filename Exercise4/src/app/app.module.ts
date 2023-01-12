import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import {FormsModule} from '@angular/forms';
import { PriceFilterPipePipe } from './price-filter-pipe.pipe';
import { CategoryPipePipe } from './category-pipe.pipe';
import { SortPipePipe } from './sort-pipe.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    PriceFilterPipePipe,
    CategoryPipePipe,
    SortPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
