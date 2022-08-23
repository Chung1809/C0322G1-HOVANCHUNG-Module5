import { Injectable } from '@angular/core';
import {Contract} from "../model/contract";
import {CustomerServiceService} from "../../customer/service-customer/customer-service.service";
import {enviroment} from "../../enviroment/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL =`${enviroment.apiUrlContract}`
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient:HttpClient) { }
  getList(): Observable<Contract[]>{
    return this.httpClient.get<Contract[]>(API_URL);
  }

  save(contract):Observable<Contract> {
    return this.httpClient.post<Contract>(API_URL,contract);
  }
}
