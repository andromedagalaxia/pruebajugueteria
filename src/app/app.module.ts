import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductComponent } from './paginas/product/product.component';
import { ProductsComponent } from './paginas/products/products.component';
import { PagesNotFoundComponent } from './paginas/pages-not-found/pages-not-found.component';

import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ProductComponent,
    ProductsComponent,
    PagesNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,//Archivo de rutas
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
