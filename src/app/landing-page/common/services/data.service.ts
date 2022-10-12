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

  getSpanish(){
    return this.http.get(Languages.SPANISH);
  }
  getEnglish(){
    return this.http.get(Languages.ENGLISH);
  }
}
