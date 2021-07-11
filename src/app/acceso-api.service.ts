import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import {Observable} from "rxjs";

import { environment } from 'src/environments/environment';
import { AutorCrearDTO, AutorDTO, EditorialDTO, LibroDTO,LibroCrearDTO, TemaDTO } from './Libros/LibroDTO';

@Injectable({
  providedIn: 'root'
})
export class AccesoApiService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  getTodos(): Observable<any>{
    let params = new HttpParams();
    return this.http.get(this.apiURL + 'inicio',{observe: 'response', params});
   }

  getAutores(tipo : string): Observable<any>{
      let params = new HttpParams();
      
      return this.http.get<AutorDTO[]>(this.apiURL + 'autores?tipo=' + tipo ,{observe: 'response', params});
  }

  getAutoresLetra(tipo:string, letra : string): Observable<any>{
    let params = new HttpParams();
    
    return this.http.get<AutorDTO[]>(this.apiURL + 'autoresLetra?tipo=' + tipo + '&letra=' + letra ,{observe: 'response', params});
}

getLibrosAutor(id:number): Observable<any>{
  let params = new HttpParams();
  return this.http.get<LibroDTO[]>(this.apiURL + 'librosautor?idautor=' + id ,{observe: 'response', params});
}

getLibrosLetra(letra:string): Observable<any>{
  let params = new HttpParams();
  return this.http.get<LibroDTO[]>(this.apiURL + 'librosLetra?letra=' + letra ,{observe: 'response', params});
}

getLibro(id:number): Observable<any>{
  let params = new HttpParams();
  return this.http.get<LibroDTO>(this.apiURL + 'libro?id=' + id ,{observe: 'response', params});
}

getAutor(id:number): Observable<any>
{
let params = new HttpParams();
return this.http.get<AutorDTO>(this.apiURL + 'autor?idautor=' + id ,{observe: 'response', params});
}
public crearautor(id:number, autor: AutorCrearDTO) {
 // console.log(" ---->> " + autor.nombre + " " + autor.apellidos);
  //const formData = this.construirFormDataAutor(autor);


  let body = JSON.stringify(autor);            
  const headers = new HttpHeaders('Content-Type: application/json');
  return this.http.put(`${this.apiURL}altaa/${id}`, body, {headers:headers});     

  
  //return this.http.put(`${this.apiURL}altaa/${id}`, '{"nombre": "' + autor.nombre + '","apellidos": "' + autor.apellidos + '"}', {headers:headers});     
 // return this.http.put(`${this.apiURL}/${id}`, formData);  
}

public crearlibro(id:number, libro:LibroCrearDTO)
{
  let body = JSON.stringify(libro);
  const headers = new HttpHeaders('Content-Type: application/json');
  return this.http.put(`${this.apiURL}altal/${id}`, body, {headers:headers}); 
}



public borrarautor(id:number)
{
  return this.http.delete(`${this.apiURL}delAutor/${id}`)
}

public getTemas(): Observable<any>
{
  let params = new HttpParams();
  return this.http.get<TemaDTO>(this.apiURL + 'temas',{observe: 'response', params});
}

public getNomenclatorAutor(semilla:string)
{
  let params = new HttpParams();
  return this.http.get<AutorDTO[]>(this.apiURL + 'nomenclatorautor?semilla=' + semilla ,{observe: 'response', params});
}

public getNomenclatorTema(semilla:string)
{
  let params = new HttpParams();
  return this.http.get<TemaDTO[]>(this.apiURL + 'nomenclatortema?semilla=' + semilla ,{observe: 'response', params});
}
public getNomenclatorEditorial(semilla:string)
{
  let params = new HttpParams();
  return this.http.get<EditorialDTO[]>(this.apiURL + 'nomenclatoreditorial?semilla=' + semilla ,{observe: 'response', params});
}

public editoriales(): Observable<any>
{
  let params = new HttpParams();
  return this.http.get<EditorialDTO>(this.apiURL + 'editoriales',{observe: 'response', params});
}




private construirFormDataAutor(autor: AutorCrearDTO): FormData {
  const formData = new FormData();
  formData.append('nombre', autor.nombre);
  formData.append('apellidos', autor.apellidos)
  return formData;
}

}
