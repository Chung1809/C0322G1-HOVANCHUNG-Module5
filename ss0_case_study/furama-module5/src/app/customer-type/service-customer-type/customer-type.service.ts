import { Injectable } from '@angular/core';
import {enviroment} from "../../enviroment/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";
const API_URL= `${enviroment.apiUrlCustomerType}`
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {


  constructor(private httpClient:HttpClient) { }
  getListCustomerType(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(API_URL)
  }
}
