import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { MapLibros } from 'src/app/utilidades/utilsLibros';
import { LibroDTO } from '../LibroDTO';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  resultadoLibros :LibroDTO[];
  pagina : number = 1;
  items : number = 15;
  total : string;
  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
    this.PedirPagina();
  }


  pageChanged(men:any){
    console.log("Paginando " + men);
    this.pagina = Number(men);
    this.PedirPagina();
  }

  PedirPagina(){
    this.accesoApiService.getLibros(String(this.pagina), String(this.items)).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
      this.resultadoLibros = respuesta.body;
      this.resultadoLibros = MapLibros(this.resultadoLibros);
      this.total = respuesta.headers.get("cantidadTotalRegistros");
      console.log("Total " + this.total);
    },error => console.log(error));
  }

}
