import { FormBuilder,  Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AccesoApiService } from 'src/app/acceso-api.service';
import { AutorCrearDTO, AutorDTO } from 'src/app/Libros/LibroDTO';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  @Input() IdAutor = 0; 
  codigo : number=0;
  nombre : string = "";
  apellidos : string = "";
  datosautor : AutorCrearDTO = {nombre : "", apellidos:""};
  resultadoAutor: AutorDTO;

  constructor(public accesoApiService:AccesoApiService, private formBuilder: FormBuilder) { }
  form: FormGroup;
  ngOnInit(): void {

    this.form = new FormGroup({
          id : new FormControl(''),
          nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
          apellidos: new FormControl('')
        });

    if (this.IdAutor > 0)
    {
    this.dameAutor(this.IdAutor);
    }
   
  }      

  onSubmit() : void{
    console.log("Nombre " + this.form.get('nombre').value + " y apellidos " + this.form.get("apellidos").value);
    this.datosautor.nombre = this.form.get('nombre').value;
    this.datosautor.apellidos = this.form.get("apellidos").value;
    //this.accesoApiService.getAutor(this.IdAutor).subscribe(() => {},error => console.log(error));
    this.accesoApiService.crearautor(this.IdAutor,this.datosautor).subscribe(() => {},error => console.log(error));
    this.form.setValue({nombre:  this.datosautor.nombre, apellidos:this.datosautor.apellidos})
  }

  dameAutor(idd:number){
    this.accesoApiService.getAutor(idd).subscribe((respuesta:HttpResponse<AutorDTO>) => {
      this.resultadoAutor = respuesta.body;
      this.form.setValue({id: idd, nombre:  this.resultadoAutor.nombre, apellidos:this.resultadoAutor.apellidos})
    },error => console.log(error));
    //console.log(JSON.stringify(this.resultadoAutor));
    //this.userForm.patchValue({name: 'Mahesh'});  
    //this.userForm.setValue({name: 'Mahesh', age: '20' }); 

   }



}
