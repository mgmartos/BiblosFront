export interface AutorDTO {
    id: number;
    nombreAutor: string;
    nombre: string;
    apellidos: string;
  }



  export class CautorDTO implements AutorDTO{
    id: number = 0;
    nombreAutor: string = "";
    nombre: string="";
    apellidos: string="";
    fecha : Date = new Date();
  }


  export interface LecturaDTO {
    titulo: string; 
    autor:string;
    codautor:number;
    fecha:Date;
    calificacion:number;
    comentario:string;
    Ebook:boolean;
    fecha_inicio:Date;
    paginas:number;
  }

   export class ClecturaDTO implements LecturaDTO{
    titulo: string;
    autor: string;
    codautor: number;
    fecha: Date;
    calificacion: number;
    comentario: string;
    Ebook: boolean;
    fecha_inicio: Date;
    paginas: number;
    constructor(){

    }
    
  }