import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import {AccesoApiService} from '../../acceso-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  resultadoPeticion:string[];
  
  NumLibros:string = "";
  NumAutores:string = "";
  Numeditoriales:string = "";

  constructor(public accesoApiService:AccesoApiService ) {

  }

  ngOnInit(): void {
    this.getDatosInicio();
   
  }   

 
  getDatosInicio() {
  // this.http.get('https://localhost:44321/api/Libros/inicio',{responseType:'text'}).subscribe(data => {complete:this.resultadoPeticion = data as string});
    //this.accesoApiService.getTodos().subscribe(data => this.resultadoPeticion = data as string);

    this.accesoApiService.getTodos().subscribe((respuesta:HttpResponse<string[]>) => {
      this.resultadoPeticion = respuesta.body; 
      this.NumLibros=this.resultadoPeticion[2];
      this.NumAutores = this.resultadoPeticion[0];
      this.Numeditoriales = this.resultadoPeticion[1];},
      error => console.log(error));


   
 /*  var cadena :string = "";  
  if (this.resultadoPeticion)
    {
    cadena = this.resultadoPeticion; 
    } 

  if (this.resultadoPeticion[2])
    {
    console.log(this.resultadoPeticion);
    this.NumLibros = this.resultadoPeticion[2];
    this.NumAutores = this.resultadoPeticion[0];
    this.Numeditoriales = this.resultadoPeticion[1]; 
    }*/
  }  
  



  }
