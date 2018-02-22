import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from './items';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GetdataService {
 private url:string = "/assets/data.json";
  constructor(private http:HttpClient) { }

  getData():Observable<Items[]>{
   return this.http.get<Items[]>(this.url)
  }

}
