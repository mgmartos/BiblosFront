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

  getAutores(): Observable<any>{
      let params = new HttpParams();
      
      return this.http.get<AutorDTO[]>(this.apiURL + 'autores',{observe: 'response', params});

  
   
    //return this.http.get<actorDTO[]>(this.apiURL, {observe: 'response', params});


  }
}
