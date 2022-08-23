import { Injectable } from '@angular/core';
import {RentType} from "../model/rent-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {enviroment} from "../../enviroment/enviroment";
const API_URL =`${enviroment.apiUrlRentType}`
@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient:HttpClient) { }
  getList(): Observable<RentType[]>{
    return this.httpClient.get<RentType[]>(API_URL);
  }
}
