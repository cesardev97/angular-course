import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseURL = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }

  getPage(argument: string):Observable<any>{
    const url = `${this.baseURL}/page/${argument}`;
    return this.http.get<any>(url);
  }
}
