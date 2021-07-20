import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  over : boolean=false;

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
}
