import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { ConfirmDialogService } from 'src/app/ConfirmDialog.service';
import { MapLibro, MapLibros } from 'src/app/utilidades/utilsLibros';
import { LibroDTO, TemaDTO } from '../LibroDTO';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  _servicio_api : AccesoApiService;
  resultadoLibros:LibroDTO[];
  Libros:any[];
  LibroSeleccionado:LibroDTO;
  LetraActiva :string = '#'

  pagina : number = 1;
  items : number = 20;
  totaln : number = 0;
  total : string;


  listaLetras:string[] = ["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  constructor(public accesoApiService:AccesoApiService,private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.pinchaLetra("#")
  }

  pinchaLetra(letra:string){
    if (this.LetraActiva != letra)
    {
      this.pagina = 1;
    }
    this.LetraActiva = letra;
    this.accesoApiService.getLibrosLetra(String(this.pagina),String(this.items),letra).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
      this.resultadoLibros = respuesta.body;
      this.total = respuesta.headers.get("cantidadTotalRegistros");
      this.totaln = Number(this.total);
      console.log("Total " + this.total);
      console.log('-->  ' + letra);
      // alert("Total " + this.total);
      // alert('-->  ' + letra);
      this.resultadoLibros = MapLibros(this.resultadoLibros);
    },error => console.log(error));

   }

   opcionSel(tema:TemaDTO)
   {
    console.log('En Padre ' + tema.id + '   ' + tema.nombreTema);
   }

   SalirEdicion(men:string)
   {
     if (men == 'Escrito')
     {
       console.log('Activo ' + this.LetraActiva);
       //this.LimpiaLibro();
     }
   }

   selRow(id:number, titulo:string)
   {
    console.log('En SelRow');
   } 

   SelLibro(id:number)
   {
    console.log('En SelLibro');
    this.accesoApiService.getLibro(id).subscribe((respuesta:HttpResponse<LibroDTO>) => {
      this.LibroSeleccionado = respuesta.body;
      this.LibroSeleccionado = MapLibro(this.LibroSeleccionado);
      console.log('Tras');
    },error => console.log(error));
   }
   LimpiaLibro()
   {
    this.LibroSeleccionado = null;     
    this.resultadoLibros = null;
    this.pinchaLetra(this.LetraActiva);

   }
   showDialog(mensaje:string, id:number)
   {
    console.log('En showDialog ' + mensaje + '  ' + Number(id));
    this.confirmDialogService.confirmThis(mensaje, function () {  
      //alert("Si clicked");  
     // accesoApiService.borrarautor(id).subscribe(() =>  console.log('Borrado'));
    }, function () {  
     // alert("No clicked");  
    })  
   }

   pageChanged(men:any){
    console.log("Paginando " + men);
    this.pagina = Number(men);
    //alert("Paginando " + men)
    this.pinchaLetra(this.LetraActiva);
  }



}
