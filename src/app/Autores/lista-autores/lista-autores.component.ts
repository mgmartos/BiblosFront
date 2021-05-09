import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { AutorDTO } from '../autor/autorDTO';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {
  resultadoAutores: AutorDTO[];
  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
    this.getautores();
  }
  getautores(){
     this.accesoApiService.getAutores().subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
                                     this.resultadoAutores = respuesta.body; },error => console.log(error));
     //this.accesoApiService.getAutores().subscribe(data => this.resultadoAutores = data);
     
     if (this.resultadoAutores)
     {
       console.log(this.resultadoAutores);
     }
     else
     {
       console.log("No devuelve nada");
     }
   }
}
