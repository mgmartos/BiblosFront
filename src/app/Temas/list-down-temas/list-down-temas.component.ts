import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { TemaDTO } from 'src/app/Libros/LibroDTO';

@Component({
  selector: 'app-list-down-temas',
  templateUrl: './list-down-temas.component.html',
  styleUrls: ['./list-down-temas.component.css']
})
export class ListDownTemasComponent implements OnInit {
  @Input() inputTema = 0; 
  @Output() outputTema = 0; 
  @Output()
  CambioTema: EventEmitter<TemaDTO> = new EventEmitter<TemaDTO>();
  listaTemas : TemaDTO[];
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';



  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
      this.accesoApiService.getTemas().subscribe((respuesta:HttpResponse<TemaDTO[]>) => {
      this.listaTemas = respuesta.body;
    },error => console.log(error));

  }
  

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    let id:number = Number(this.opcionSeleccionado);
    for (var _i = 0; _i < this.listaTemas.length; _i++)
    {
      if (this.listaTemas[_i].id == id)
      {
        console.log(this.listaTemas[_i].id.toString() + ' ---- ' + this.listaTemas[_i].nombreTema)
        this.CambioTema.emit(this.listaTemas[_i]);
      }
    }
}

SelTema(id:number)
{
for (var _i = 0; _i < this.listaTemas.length; _i++)
{
  if (this.listaTemas[_i].id == id)
  {
    console.log(this.listaTemas[_i].id.toString() + '  ' + this.listaTemas[_i].nombreTema)}
  }

}

}