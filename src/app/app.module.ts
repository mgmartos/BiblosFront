import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConfirmDialogModule} from './confirm-dialog.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { ListaLibrosComponent } from './Libros/lista-libros/lista-libros.component';
import { ListaAutoresComponent } from './Autores/lista-autores/lista-autores.component';
import { AccesoApiService } from './acceso-api.service';
import { AutorComponent } from './Autores/autor/autor.component';
import { MenuComponent } from './Menu/menu/menu.component';
import {LibroComponent} from './Libros/libro/libro.component';
import {ListDownTemasComponent} from './Temas/list-down-temas/list-down-temas.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaLibrosComponent,
    ListaAutoresComponent,
    AutorComponent,
    MenuComponent,
    LibroComponent,
    ListDownTemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  providers: [AccesoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
