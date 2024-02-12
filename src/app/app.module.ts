import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConfirmDialogModule} from './confirm-dialog.module'
import {NgxPaginationModule} from 'ngx-pagination';

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
import {ListaTemasComponent } from './Temas/lista-temas/lista-temas.component';
import { BuscalibrosComponent } from './Busquedas/buscalibros/buscalibros.component';
import { LibrosautorComponent } from './Libros/librosautor/librosautor.component';
import { LibrosComponent } from './Libros/libros/libros.component';
import { ListalibrosComponent } from './Libros/listalibros/listalibros.component';
import { ListaEditorialesComponent } from './Editoriales/lista-editoriales/lista-editoriales.component';
import { ListaLecturasComponent } from './Lecturas/lista-lecturas/lista-lecturas.component';
import { LecturaComponent } from './Lecturas/lectura/lectura.component'


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaLibrosComponent,
    ListaAutoresComponent,
    AutorComponent,
    MenuComponent,
    LibroComponent,
    ListDownTemasComponent,
    ListaTemasComponent,
    BuscalibrosComponent,
    LibrosautorComponent,
    LibrosComponent,
    ListalibrosComponent,
    ListaEditorialesComponent,
    ListaLecturasComponent,
    LecturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    NgxPaginationModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [AccesoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
