import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IFilmes } from '../interfaces/i-filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  api = `${environment.api}/filme`;

  constructor(private http: HttpClient) { }

  cadastrarFilme(request: IFilmes){
    return this.http.post<IFilmes>(this.api, request);
  }

  listarTodosFilmes(){
    return this.http.get<IFilmes[]>(this.api);
  }

  deletarFilme(id: string){
    return this.http.delete(`${this.api}/${id}`);
  }

  editarFilme(id: string, request: IFilmes){
    return this.http.patch(`${this.api}/${id}`, request);
  }

}
