import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { EditorialDTO, LibroDTO } from 'src/app/Libros/LibroDTO';
import { MapLibros } from 'src/app/utilidades/utilsLibros';

@Component({
  selector: 'app-lista-editoriales',
  templateUrl: './lista-editoriales.component.html',
  styleUrls: ['./lista-editoriales.component.css']
})
export class ListaEditorialesComponent implements OnInit {

  resultadoEditoriales:EditorialDTO[];
  editorialSeleccionada:number=0;

  pagina : number = 1;
  items : number = 20;
  totaln : number = 0;
  total : string;

  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
    this.accesoApiService.editoriales().subscribe((respuesta:HttpResponse<EditorialDTO[]>) => {
      this.resultadoEditoriales = respuesta.body;
      //console.log(this.resultadoEditoriales)
     },error => console.log(error));
    }

    SelEditorial(id:number)
    {
      this.editorialSeleccionada = id;
    }

    SalirEdicion(men:string)
    {
      if (men == 'Escrito')
      {
        //console.log('Activo ' + this.LetraActiva);
        //this.LimpiaLibro();
        this.editorialSeleccionada = 0;
      }
    }

   /*  SelEditorial(id:number)
    {
     console.log('En SelEditorial');

     this.accesoApiService.getLibrosEditorial(String(this.pagina),String(this.items),id).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
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
    this.SelEditorial(this.editorialSeleccionada);
  }
 */


}
