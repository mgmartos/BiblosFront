import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { MapLibros } from 'src/app/utilidades/utilsLibros';
import { AutorDTO, LibroDTO } from '../LibroDTO';

@Component({
  selector: 'app-librosautor',
  templateUrl: './librosautor.component.html',
  styleUrls: ['./librosautor.component.css']
})
export class LibrosautorComponent implements OnInit {
  @Input() IdAutor=0; 
  resultadoAutor:AutorDTO;
  nombreautor:string='';

  resultadoLibros:LibroDTO[];

  constructor(public accesoApiService:AccesoApiService) {
    


   }

  ngOnInit(): void {
    console.log('Autor Id 1 : ' + this.IdAutor)

       this.accesoApiService.getAutor(this.IdAutor).subscribe((respuesta:HttpResponse<AutorDTO>) => {
        this.resultadoAutor = respuesta.body;
        this.nombreautor = this.resultadoAutor.nombreAutor;
        console.log('Autor : ' + this.nombreautor);

      },error => console.log(error));
console.log('Autor Id 2 : ' + this.IdAutor)

   let id : number = this.IdAutor;
    this.accesoApiService.getLibrosAutor(id).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
      console.log('Autor Id 3 : ' + this.IdAutor)
      this.resultadoLibros = respuesta.body;
       this.resultadoLibros = MapLibros(this.resultadoLibros);
      },error => console.log(error));

  }

}
