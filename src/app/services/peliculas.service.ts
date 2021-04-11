import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResp } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }

  getCartelera(): Observable<CarteleraResp>{

    return this.http.get<CarteleraResp>('https://api.themoviedb.org/3/movie/now_playing?api_key=b29b1cdde10fdc73bad6af8f7a6bf76f&language=es-ES&page=1');
  }

}
