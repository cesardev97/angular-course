import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFInterface, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey     :string = 'WeYgtrMMEQ4leHGFxMme6UJojgKE67fd';
  private servicioURL:string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];
  
  public resultados: Gif[] = [];

  constructor(private http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }


  get historial(){
    return [...this._historial];
  }

  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    this.http.get<SearchGIFInterface>(`${this.servicioURL}/search`, { params })
      .subscribe(resp => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })

  }
}
