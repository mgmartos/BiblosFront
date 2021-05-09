import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import { AutorDTO } from './Autores/autor/autorDTO';
import { environment } from 'src/environments/environment';

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

}
