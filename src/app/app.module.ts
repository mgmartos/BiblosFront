import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { ListaLibrosComponent } from './Libros/lista-libros/lista-libros.component';
import { ListaAutoresComponent } from './Autores/lista-autores/lista-autores.component';
import { AccesoApiService } from './acceso-api.service';
import { AutorComponent } from './Autores/autor/autor.component';
import { MenuComponent } from './Menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaLibrosComponent,
    ListaAutoresComponent,
    AutorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccesoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
