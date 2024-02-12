import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { ClecturaDTO, LecturaDTO } from '../lecturasDTO';
import { AutorDTO } from 'src/app/Libros/LibroDTO';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.css']
})
export class LecturaComponent implements OnInit {
  @Input() tituloLectura = ""; 
  Titulo:string = "";
  Autor:string="";
  CodAutor:number = 0;
  Fecha:Date = new Date();
  Calificacion:number=0;
  Comentario:string="";
  Ebook:boolean=true;
  FechaInicio:Date = new Date();
  Paginas:number = 0;
  Lectura:ClecturaDTO=new ClecturaDTO();
 
  
  autorDTO : AutorDTO;
  autores : AutorDTO[] = [];
  numautores : number = 0;
  autorSeleccionado:string ="";

  hoy:Date = new Date();
  hoy2:Date = new Date();

  _servicio_api:AccesoApiService;

  constructor(private accesoApiService:AccesoApiService, private formBuilder: FormBuilder) {     
  }
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
          Titulo: new FormControl('',[Validators.required, Validators.minLength(3)]),
          Autor: new FormControl('',[Validators.required, Validators.minLength(3)]),
          Calificacion : new FormControl(0,[Validators.min(0), Validators.max(10)]),
          Paginas : new FormControl(0,[Validators.min(0), Validators.max(9999)]),
          Ebook : new FormControl(true,),
          Comentario : new FormControl("", [Validators.maxLength(255)]),
          Fecha : new FormControl(new Date()),
          FechaInicio : new FormControl(new Date()),
          selectautor:new FormControl(''),
        });
    this._servicio_api = this.accesoApiService;
    this._servicio_api.getAutores("n").subscribe( {next:(respuesta:HttpResponse<AutorDTO[]>) => {
      this.autores = respuesta.body;
      },
    complete: () => {this.numautores = this.autores.length;;},
      error:() => console.log(Error)}); 

  if (this.tituloLectura != "")
  {
  this.dameLectura(this.tituloLectura);
  }

  }
  capturar(){}
  dameLectura(titulo:string){
// obtención del registro de lectura si estamos editando
  }




  onSelectedAutor(sel:any)
  {
    this.autorSeleccionado = sel.target.value;
    let ausel:any  = this.autores.filter(a=>a.nombreAutor ==this.autorSeleccionado)
    this.Autor = ausel[0].nombreAutor;
    this.CodAutor = ausel[0].id;

    alert(this.CodAutor + '  ' + this.Autor);

    
  }  
  CogerFecha(sel : any)
  {
    this.hoy = sel.target.value;
    this.FechaInicio = new Date(this.hoy);
  }
  CogerFechaFin(sel : any)
  {
    this.hoy2 = sel.target.value;
    this.Fecha = new Date(this.hoy2);
  }

  onSubmit(){

  }
}
