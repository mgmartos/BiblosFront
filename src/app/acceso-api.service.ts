import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

import { environment } from 'src/environments/environment';
import { AutorDTO, LibroDTO } from './Libros/LibroDTO';

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

}
