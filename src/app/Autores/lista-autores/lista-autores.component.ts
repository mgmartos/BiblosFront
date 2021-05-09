import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { AutorDTO } from '../autor/autorDTO';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {
  resultadoAutores: AutorDTO[];
  listaLetras:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  checked :string = "n"
  letra :string = "A"
  constructor(public accesoApiService:AccesoApiService) { }

  ngOnInit(): void {
    //this.getautores("N");
    this.pinchaLetra("A")
  }
  getautores(tipo:string){
     this.accesoApiService.getAutores(tipo).subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
                                     this.resultadoAutores = respuesta.body; },error => console.log(error));
     //this.accesoApiService.getAutores().subscribe(data => this.resultadoAutores = data);
     
     if (this.resultadoAutores)
     {
       console.log(this.resultadoAutores);
     }
     else
     { 
       console.log("No devuelve nada");
     }
   }

   pinchaLetra(letra:string){
    console.log(letra);
    console.log(this.checked);
    this.accesoApiService.getAutoresLetra(this.checked,letra).subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
      this.resultadoAutores = respuesta.body; },error => console.log(error));
      this.letra = letra;

   }
   
   selRow(id:number){
     console.log(id);
   }

   onCheckboxChange(e:any) {
     
    if (e.target.checked) 
    {
      this.checked = "a"
 
    } 
    else 
    {
      this.checked = "n"
    }
    this.pinchaLetra(this.letra);
  }

}
