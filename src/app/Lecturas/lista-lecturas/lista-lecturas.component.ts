import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { LecturaDTO } from '../lecturasDTO';
import { HttpResponse } from '@angular/common/http';
import { ConfirmDialogService } from 'src/app/ConfirmDialog.service';

@Component({
  selector: 'app-lista-lecturas',
  templateUrl: './lista-lecturas.component.html',
  styleUrls: ['./lista-lecturas.component.css']
})
export class ListaLecturasComponent implements OnInit {
_servicio_api : AccesoApiService;
lecturas:LecturaDTO[] = [];
numlecturas:number;
pagina : number = 1;
items : number = 20;
totaln : number = 0;
total : string;

  constructor( servicio : AccesoApiService,private confirmDialogService: ConfirmDialogService) {
    this._servicio_api = servicio;
   }

  ngOnInit(): void {
        this.pagina=1;
        this.ObtenerLecturas();
  }

  ObtenerLecturas()
  {
    this._servicio_api.getLecturas(String(this.pagina),String(this.items)).subscribe( {next:(respuesta:HttpResponse<LecturaDTO[]>) => {
      this.lecturas = respuesta.body; 
      this.total = respuesta.headers.get("cantidadTotalRegistros");
      this.totaln = Number(this.total);
      this.numlecturas = this.totaln;
      console.log("Total " + this.total);
    },
   // complete: () => {this.numlecturas = this.lecturas.length},
      error:() => {console.log(Error);
                  alert(Error.toString())}}); 




  }


  SelLectura(titulo:string){
    alert("Estamos en Función selLectura con " + titulo)
  }
  SelLibro(titulo:string){

  }

  showDialog(mensaje:string, titulo:string)
   {
    console.log('En showDialog ' + mensaje + '  ' + titulo);
    this.confirmDialogService.confirmThis(mensaje,  () => {  
      this.SelLectura(titulo);
     // accesoApiService.borrarautor(id).subscribe(() =>  console.log('Borrado'));
    }, function () {  
      alert("No clicked");  
    })  
   }

   pageChanged(men:any){
    console.log("Paginando " + men);
    this.pagina = Number(men);
    this.ObtenerLecturas();
  }


}
