import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routes.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgHttpLoaderModule } from 'ng-http-loader'; // <============

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule ,
    NgHttpLoaderModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
