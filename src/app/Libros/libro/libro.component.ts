import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { HttpResponse } from '@angular/common/http';
import { AutorCrearDTO, AutorDTO, EditorialDTO, LibroDTO,LibroCrearDTO, TemaDTO } from 'src/app/Libros/LibroDTO';
import { MapLibro } from 'src/app/utilidades/utilsLibros';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() IdLibro = 0; 
  resultadoAutores : AutorDTO[];
  resultadoEditoriales : EditorialDTO[];
  resultadoTemas : TemaDTO[];
  opcionSeleccionado: string  = '0';
  opcionSeleccionadoE: string  = '1'; 
  opcionSeleccionadoT: string  = '1';
  datoslibro : LibroCrearDTO = {id:0, titulo : "", autorId:0, editorialId:0, temaId:0, calificacion:0, paginas:0, comentario:"", fecha:""};
  LibroSeleccionado:LibroDTO;
  MensajeBoton : string = 'Enviar';
  Class : string = 'container p-4 mx-3 marco';

  constructor(public accesoApiService:AccesoApiService, private formBuilder: FormBuilder) { }
  formbook: FormGroup;

  ngOnInit(): void {
    this.formbook = new FormGroup({
      id : new FormControl(''),
      titulo: new FormControl('',[Validators.required, Validators.minLength(2)]),
      autor: new FormControl(''),
      selectautor:new FormControl(''),
      editorial: new FormControl(''),
      selecteditorial:new FormControl(''),
      tema: new FormControl(''),
      selecttema:new FormControl(''),
      calificacion: new FormControl(''),
      paginas: new FormControl(''),
      comentario: new FormControl(''),
      fecha: new FormControl('')
    });
      
    this.accesoApiService.getAutores('n').subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
      this.resultadoAutores = respuesta.body;
      //console.log(this.resultadoAutores)
     },error => console.log(error));

    this.accesoApiService.getTemas().subscribe((respuesta:HttpResponse<TemaDTO[]>) => {
      this.resultadoTemas = respuesta.body;
      //console.log(this.resultadoAutores)
     },error => console.log(error));

     this.accesoApiService.editoriales().subscribe((respuesta:HttpResponse<EditorialDTO[]>) => {
      this.resultadoEditoriales = respuesta.body;
      //console.log(this.resultadoAutores)
     },error => console.log(error));

     if (this.IdLibro > 0)
     {
       this.MensajeBoton = 'Actualizar';
       this.Class = 'container p-4 mx-3 marco2';
     this.dameLibro(this.IdLibro);
     }
  }


  dameLibro(idd:number){
    this.accesoApiService.getLibro(idd).subscribe((respuesta:HttpResponse<LibroDTO>) => {
      this.LibroSeleccionado = respuesta.body;
      this.LibroSeleccionado = MapLibro(this.LibroSeleccionado);
      let date: Date = new Date(this.LibroSeleccionado.fecha);
      this.IdLibro = idd;
      this.opcionSeleccionadoT = String(this.LibroSeleccionado.temaId);     
      this.opcionSeleccionado = String(this.LibroSeleccionado.autorId);      
      this.opcionSeleccionadoE = String(this.LibroSeleccionado.editorialId);

      this.formbook.setValue({id: idd, titulo:  this.LibroSeleccionado.titulo, autor:this.LibroSeleccionado.Autordto.nombreAutor, selectautor:null,
        editorial:this.LibroSeleccionado.Editorialdto.nombreEditorial, selecteditorial:null, tema:this.LibroSeleccionado.Temadto.nombreTema, 
        selecttema:null, calificacion:this.LibroSeleccionado.calificacion , paginas:this.LibroSeleccionado.paginas ,comentario:this.LibroSeleccionado.comentario ,
        fecha:this.LibroSeleccionado.fecha.substring(0,4) + '-' + this.LibroSeleccionado.fecha.substring(5,7) + '-' + this.LibroSeleccionado.fecha.substring(8,10) })
    },error => console.log(error));
   }

  /*
  fecha:String(this.LibroSeleccionado.fecha).substring(8,10) + '/'+ String(this.LibroSeleccionado.fecha).substring(5,7) + '/' + 
        String(this.LibroSeleccionado.fecha).substring(0,4)
  */


  Seleccion_elementos(index: number)
  {
    if (index == 1)
    {
      console.log("1");
      return "selected";
    }
    else
    {
      console.log("0");
      return "";
    }
  }

  capturar()    
  {
    console.log('--> ' + this.opcionSeleccionado)
    
    for (var _i=0;_i<this.resultadoAutores.length;_i++)
    {
      if (this.resultadoAutores[_i].id == Number(this.opcionSeleccionado))
        {
          this.formbook.patchValue({autor: this.resultadoAutores[_i].nombreAutor});
          _i=999999;
        }
    }
    //this.resultadoAutores = null;
    //this.resultadoAutores =[];
  }
 
  capturarE()    
  {
    console.log('--> ' + this.opcionSeleccionadoE)
    
    for (var _i=0;_i<this.resultadoEditoriales.length;_i++)
    {
      if (this.resultadoEditoriales[_i].id == Number(this.opcionSeleccionadoE))
        {
          this.formbook.patchValue({editorial: this.resultadoEditoriales[_i].nombreEditorial});
          _i=999999;
        }
    }
    //this.resultadoEditoriales = null;

  }
  capturarT()    
  {
    console.log('--> ' + this.opcionSeleccionadoT)
    
    for (var _i=0;_i<this.resultadoTemas.length;_i++)
    {
      if (this.resultadoTemas[_i].id == Number(this.opcionSeleccionadoT))
        {
          this.formbook.patchValue({tema: this.resultadoTemas[_i].nombreTema});
          _i=999999;
        }
    }
   // this.resultadoTemas = null;

  }




  NomenclatorAutor()
  {
    let semillaAutor : string = "";
    semillaAutor = this.formbook.get('autor').value;
    if (semillaAutor.length > 0)
    {
    this.accesoApiService.getNomenclatorAutor(semillaAutor).subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
      this.resultadoAutores = respuesta.body;
      console.log(respuesta.body)
     },error => console.log(error));
    }
    else
    {
      this.accesoApiService.getAutores('n').subscribe((respuesta:HttpResponse<AutorDTO[]>) => {
        this.resultadoAutores = respuesta.body;
       },error => console.log(error));
    }

  }

  NomenclatorTema()
  {
    let semillaTema : string = "";
    semillaTema = this.formbook.get('tema').value;
    if (semillaTema.length > 0) {
      this.accesoApiService.getNomenclatorTema(semillaTema).subscribe((respuesta:HttpResponse<TemaDTO[]>) => {
        this.resultadoTemas = respuesta.body;
      },error => console.log(error));
    }
    else
    {
      this.accesoApiService.getTemas().subscribe((respuesta:HttpResponse<TemaDTO[]>) => {
        this.resultadoTemas = respuesta.body;
      },error => console.log(error));
    }
  }
  NomenclatorEditorial()
  {
    let semillaEditorial : string = "";
    semillaEditorial = this.formbook.get('editorial').value;
    if (semillaEditorial.length > 0)
    {
      this.accesoApiService.getNomenclatorEditorial(semillaEditorial).subscribe((respuesta:HttpResponse<EditorialDTO[]>) => {
        this.resultadoEditoriales = respuesta.body;
      },error => console.log(error));
    }
    else
    {
      this.accesoApiService.editoriales().subscribe((respuesta:HttpResponse<EditorialDTO[]>) => {
        this.resultadoEditoriales = respuesta.body;
       },error => console.log(error));
    }
  }

  onSubmit() : void
  {
    console.log("Título " + this.formbook.get('titulo').value );
    console.log("Calificación " + this.formbook.get('calificacion').value );
    let nombre = this.formbook.get('autor').value
    
    for (var _i=0;_i<this.resultadoAutores.length;_i++)
    {
      if (this.resultadoAutores[_i].nombreAutor == nombre)
        {
          this.opcionSeleccionado = String(this.resultadoAutores[_i].id);
          _i=999999;
        }
    }

    let nombreE = this.formbook.get('editorial').value
    
    for (var _i=0;_i<this.resultadoEditoriales.length;_i++)
    {
      if (this.resultadoEditoriales[_i].nombreEditorial == nombreE)
        {
          this.opcionSeleccionadoE = String(this.resultadoEditoriales[_i].id);
          _i=999999;
        }
    }  

    let nombreT = this.formbook.get('tema').value
    
    for (var _i=0;_i<this.resultadoTemas.length;_i++)
    {
      if (this.resultadoTemas[_i].nombreTema == nombreT)
        {  
          this.opcionSeleccionadoT = String(this.resultadoTemas[_i].id);
          _i=999999;
        }
    }
 




    this.datoslibro.titulo = this.formbook.get('titulo').value;
    this.datoslibro.autorId = Number(this.opcionSeleccionado);
    this.datoslibro.editorialId = Number(this.opcionSeleccionadoE);
    this.datoslibro.temaId = Number(this.opcionSeleccionadoT);
   /*  this.datoslibro.autorId = Number(this.formbook.get('selectautor').value);
    this.datoslibro.editorialId = Number(this.formbook.get('selecteditorial').value);
    this.datoslibro.temaId = Number(this.formbook.get('selecttema').value); */
    this.datoslibro.calificacion = Number(this.formbook.get('calificacion').value);
    this.datoslibro.paginas = Number(this.formbook.get('paginas').value);
    this.datoslibro.comentario = this.formbook.get('comentario').value;
    this.datoslibro.fecha = this.formbook.get('fecha').value;
    //this.IdLibro = 968;
    this.accesoApiService.crearlibro(this.IdLibro,this.datoslibro).subscribe(() => {},error => console.log(error));
    console.log("Comentario " + this.formbook.get('comentario').value );
    //this.form.setValue({nombre:  this.datosautor.nombre, apellidos:this.datosautor.apellidos})
  }







}
