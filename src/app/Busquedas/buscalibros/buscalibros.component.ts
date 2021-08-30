import { HttpResponse } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
/* import { threadId } from 'node:worker_threads'; */
import { AccesoApiService } from 'src/app/acceso-api.service';
import { AutorDTO, LibroDTO } from 'src/app/Libros/LibroDTO';
import { MapLibros } from 'src/app/utilidades/utilsLibros';

@Component({
  selector: 'app-buscalibros',
  templateUrl: './buscalibros.component.html',
  styleUrls: ['./buscalibros.component.css']
})
export class BuscalibrosComponent implements OnInit {
  formbuscar: FormGroup;
  resultadoAutores : AutorDTO[];
  resultadoLibros : LibroDTO[];
  cantidadLibros : number = 0;
  over : boolean=false;
  currentItem : number;

  constructor(public accesoApiService:AccesoApiService, private formBuilder: FormBuilder) { 
    this.formbuscar = new FormGroup({
      titulo: new FormControl(''),
      autor: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  NomenclatorLibros() {
    this.resultadoLibros = null;
    let semillaLibro : string = "";
    semillaLibro = this.formbuscar.get('titulo').value;

  
    if (semillaLibro.length > 0)
    {
      this.accesoApiService.getLibrosNomenclator(semillaLibro).subscribe((respuesta:HttpResponse<LibroDTO[]>) => {
        this.resultadoLibros = respuesta.body;
        console.log('-->  ' + semillaLibro);
        this.resultadoLibros = MapLibros(this.resultadoLibros);
        this.cantidadLibros = this.resultadoLibros.length;
      },error => console.log(error));
  }
  }
  NomenclatorAutores() {
    this.resultadoAutores = null;
    let semillaAutor : string = "";
    semillaAutor = this.formbuscar.get('autor').value;
    if (semillaAutor.length > 0)
    {
    this.accesoApiService.getNomenclatorAutor(semillaAutor).subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
      this.resultadoAutores = respuesta.body;
      console.log(respuesta.body)
     },error => console.log(error));
    }
    
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

  onSubmit() : void{


  }

  ponerCurrent(id:number){
    console.log('Ponemos current : ' + id); 
    if ((id != null) && (id > 0))
    {
      this.currentItem = id;
    }
  }
  limpiarCurrent(){
    this.currentItem = null;
  }
}
