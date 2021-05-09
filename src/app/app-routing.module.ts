import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAutoresComponent } from './Autores/lista-autores/lista-autores.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { ListaLibrosComponent } from './Libros/lista-libros/lista-libros.component';

const routes: Routes = [
      {path:'inicio',component:InicioComponent},
      {path:'libros',component:ListaLibrosComponent},
      {path:'autores',component:ListaAutoresComponent},
      {path:'',component:InicioComponent},
      {path:'**',component:InicioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
