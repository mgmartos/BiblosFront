import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorComponent } from './Autores/autor/autor.component';
import { ListaAutoresComponent } from './Autores/lista-autores/lista-autores.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { ListaLibrosComponent } from './Libros/lista-libros/lista-libros.component';
import {LibroComponent} from './Libros/libro/libro.component';
import { ListaTemasComponent } from './Temas/lista-temas/lista-temas.component';
import { BuscalibrosComponent } from './Busquedas/buscalibros/buscalibros.component';

const routes: Routes = [
      {path:'inicio',component:InicioComponent},
      {path:'libros',component:ListaLibrosComponent},
      {path:'autores',component:ListaAutoresComponent},
      {path:'autor',component:AutorComponent},      
      {path:'buscar',component:BuscalibrosComponent},
      {path:'libro',component:LibroComponent},
      {path:'temas',component:ListaTemasComponent},
      {path:'',component:InicioComponent},
      {path:'**',component:InicioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
    