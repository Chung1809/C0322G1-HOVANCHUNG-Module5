import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../../benh-nhan/model/patient";
import {Medical} from "../model/medical";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroment/enviroment";
const API_URL = `${environment.apiUrlA}`
@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient:HttpClient) { }
  getList(): Observable<Medical[]> {
    return this.httpClient.get<Medical[]>(API_URL );
  }
}
