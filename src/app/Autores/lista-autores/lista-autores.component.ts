import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { AutorDTO, LibroDTO } from 'src/app/Libros/LibroDTO';
import { MapLibros } from 'src/app/utilidades/utilsLibros';
import {ConfirmDialogService} from 'src/app/ConfirmDialog.service';


@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {
  resultadoAutores: AutorDTO[];
  resultadoLibros:LibroDTO[];
  resultadoAutor:AutorDTO;
  Libros:any[];
  currentItem:number
  nombreAutor:string

  pagina : number = 1;
  items : number = 20;
  total : string;


  listaLetras:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  checked :string = "n";
  letra :string = "A";
  over : boolean=false;
  constructor(public accesoApiService:AccesoApiService,private confirmDialogService: ConfirmDialogService,) { }

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

   pageChanged(men:any){
    console.log("Paginando " + men);
    this.pagina = Number(men);
    this.pinchaLetra(this.letra);
  }


   pinchaLetra(letra:string){
    //console.log(letra);
    //console.log(this.checked);
    if (this.letra != letra)
    {
      this.pagina = 1;
    }
   // this.accesoApiService.getAutoresLetra(this.checked,letra).subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
      this.accesoApiService.getAutoresLetra(String(this.pagina),String(this.items),this.checked,letra).subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
        this.resultadoAutores = respuesta.body;
        this.total = respuesta.headers.get("cantidadTotalRegistros");
        console.log("Total " + this.total);
          },error => console.log(error));
      this.letra = letra;
      this.limpiarLibros();
   }
   limpiarLibros(){
    this.resultadoLibros = null;
    this.nombreAutor = '';
   }

   limpiarAutor(){
    this.resultadoAutor = null;
   }



   selRow(id:number, nombre:string){
     console.log(id); 
     this.nombreAutor = nombre;
     this.accesoApiService.getLibrosAutor(id).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
      this.resultadoLibros = respuesta.body;
       this.resultadoLibros = MapLibros(this.resultadoLibros);
      /* this.resultadoLibros = respuesta.body; for (var _i = 0; _i < this.resultadoLibros.length; _i++) 
        {
          console.log(this.resultadoLibros[_i]);

          let Clibro = JSON.stringify(this.resultadoLibros[_i]);
          let libro = JSON.parse(Clibro);          
          this.resultadoLibros[_i].Autordto = libro.autor;
          this.resultadoLibros[_i].Editorialdto = libro.editorial;
          this.resultadoLibros[_i].Temadto = libro.tema;

      
        } */
      },error => console.log(error));

   }
   
   cellNombre(nombre:string){
    console.log(nombre);
  }
  cellApellido(apell:string){
    console.log(apell);
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
    this.pagina = 1;
    this.pinchaLetra(this.letra);
  }
  ponover(valor:boolean){
    this.over = valor;
    //console.log(this.over);
  }
  asignaclases(index:number)
  {
    //index %2 == 0 ? 'impares' : 'pares'

    let clases = {
      pares: (index %2 == 0),
      impares: (index %2 != 0),
      hover_row: this.over
  };
  return clases;
  }

  SelAutor(id:number)
  {
    let aut
    this.accesoApiService.getAutor(id).subscribe((respuesta:HttpResponse<AutorDTO>) => {
      this.resultadoAutor = respuesta.body;
      console.log('--->  ' + respuesta.body);
      console.log('--->  ' +JSON.stringify(this.resultadoAutor));
      console.log('--->  ' +this.resultadoAutor.id);
      console.log('--->  ' + this.resultadoAutor.nombreAutor);
      console.log('--->  ' + this.resultadoAutor.nombre);
      console.log('--->  ' + this.resultadoAutor.apellidos);
    },error => console.log(error));
    this.currentItem = id;
    console.log(JSON.stringify(this.resultadoAutor));

  }
  DelAutor(id:number)
  {


    
    //this.accesoApiService.borrarautor(id).subscribe(() =>  console.log('Borrado'));
  }

  showDialog(mensaje:string, id:number) {  
    this.confirmDialogService.confirmThis(mensaje, function () {  
      alert("Si clicked");  
     // accesoApiService.borrarautor(id).subscribe(() =>  console.log('Borrado'));
    }, function () {  
      alert("No clicked");  
    })  
  }  



}
