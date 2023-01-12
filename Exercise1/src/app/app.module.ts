import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ButtonComponentComponent } from './shared-module/button-component/button-component.component';
@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModuleModule,
    ]
})
export class AppModule { }
