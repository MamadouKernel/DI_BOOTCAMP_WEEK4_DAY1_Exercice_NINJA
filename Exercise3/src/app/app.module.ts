import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModuleModule } from './modules/product-module/product-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
