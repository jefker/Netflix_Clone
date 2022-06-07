import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  // api = `${environment.api}/login`;

  constructor(private http: HttpClient) { }

}
