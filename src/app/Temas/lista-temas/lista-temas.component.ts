import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { ConfirmDialogService } from 'src/app/ConfirmDialog.service';
import { LibroDTO, TemaDTO } from 'src/app/Libros/LibroDTO';
import { MapLibros } from 'src/app/utilidades/utilsLibros';

@Component({
  selector: 'app-lista-temas',
  templateUrl: './lista-temas.component.html',
  styleUrls: ['./lista-temas.component.css']
})
export class ListaTemasComponent implements OnInit {
  resultadoTemas:TemaDTO[];
  resultadoLibros:LibroDTO[];
  idActual: number = 0;
  
  pagina : number = 1;
  items : number = 15;
  totaln : number = 0;
  total : string;

  constructor(public accesoApiService:AccesoApiService, private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.accesoApiService.getTemas().subscribe((respuesta:HttpResponse<TemaDTO[]>) => {
      this.resultadoTemas = respuesta.body;
    },error => console.log(error));
  }

  opcionSel(tema:TemaDTO)
  {
   console.log('En Padre ' + tema.id + '   ' + tema.nombreTema);

  }
  SelTema(id:number){
    if (id != this.idActual)
    {
      this.pagina = 1;
    }
    this.idActual = id;
    this.accesoApiService.getLibrosTema(String(this.pagina),String(this.items),id).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
      this.resultadoLibros = respuesta.body;
      this.resultadoLibros = MapLibros(this.resultadoLibros);
      this.total = respuesta.headers.get("cantidadTotalRegistros");
      this.totaln = Number(this.total);
      console.log(this.resultadoLibros);
    },error => console.log(error));
//console.log('Sacaremos la lista de libros')
  }

  LimpiaLibros(){
    this.resultadoLibros = null;
  }

  pageChanged(men:any){
    console.log("Paginando " + men);
    this.pagina = Number(men);
    this.SelTema(this.idActual);
  }





  showDialog(mensaje:string, id:number)
  {
   console.log('En showDialog ' + mensaje + '  ' + Number(id));
   this.confirmDialogService.confirmThis(mensaje, function () {  
     //alert("Si clicked");  
    // accesoApiService.borrarautor(id).subscribe(() =>  console.log('Borrado'));
   }, function () {  
     //alert("No clicked");  
   })  
  } 
}
