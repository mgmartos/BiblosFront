import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { MapLibros } from 'src/app/utilidades/utilsLibros';
import { LibroDTO } from '../LibroDTO';

@Component({
  selector: 'app-listalibros',
  templateUrl: './listalibros.component.html',
  styleUrls: ['./listalibros.component.css']
})
export class ListalibrosComponent implements OnInit {
  @Input() editorial:number=0;
  @Output() CambioEditorial: EventEmitter<string> = new EventEmitter<string>();
  pagina : number = 1;
  items : number = 20;
  totaln : number = 0;
  total : string;
  resultadoLibros:LibroDTO[];

  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
    this.SelEditorial()
  }


  SelEditorial()
  {
   console.log('En SelEditorial');

   this.accesoApiService.getLibrosEditorial(String(this.pagina),String(this.items),this.editorial).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
    this.resultadoLibros = respuesta.body;
    this.resultadoLibros = MapLibros(this.resultadoLibros);
    this.total = respuesta.headers.get("cantidadTotalRegistros");
    this.totaln = Number(this.total);
    console.log(this.totaln);
    console.log(this.resultadoLibros);
  },error => console.log(error));
  }

    
  pageChanged(men:any){
    console.log("Paginando " + men);
    this.pagina = Number(men);
    this.SelEditorial();
  }

  LimpiaLibros(){
    this.resultadoLibros = null;
    this.CambioEditorial.emit('Escrito');
  }
}
