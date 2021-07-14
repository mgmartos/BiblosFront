import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { TemaDTO } from 'src/app/Libros/LibroDTO';

@Component({
  selector: 'app-lista-temas',
  templateUrl: './lista-temas.component.html',
  styleUrls: ['./lista-temas.component.css']
})
export class ListaTemasComponent implements OnInit {
  resultadoTemas:TemaDTO[];

  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
  }

  opcionSel(tema:TemaDTO)
  {
   console.log('En Padre ' + tema.id + '   ' + tema.nombreTema);
  }


}
