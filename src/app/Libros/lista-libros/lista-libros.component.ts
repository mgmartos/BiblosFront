import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { MapLibros } from 'src/app/utilidades/utilsLibros';
import { LibroDTO } from '../LibroDTO';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  resultadoLibros:LibroDTO[];
  Libros:any[];

  listaLetras:string[] = ["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
    this.pinchaLetra("#")
  }

  pinchaLetra(letra:string){
    console.log(letra);
    this.accesoApiService.getLibrosLetra(letra).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
      this.resultadoLibros = respuesta.body;
      this.resultadoLibros = MapLibros(this.resultadoLibros);
    },error => console.log(error));

   }

}
