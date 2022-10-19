import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Languages } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getConfig(idiom:Languages){
    return this.http.get(
      `${environment.config}${environment[idiom]}`
    );
  }

  getTecnologies(){
    return this.http.get(
      `${environment.tecnologies}`
    );
  }
}
