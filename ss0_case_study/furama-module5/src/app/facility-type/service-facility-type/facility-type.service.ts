import { Injectable } from '@angular/core';
import {FacilityType} from "../model/facility-type";
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../enviroment/enviroment";
import {Observable} from "rxjs";
const API_URL =`${enviroment.apiUrlFacilityType}`
@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient:HttpClient) { }
  getList():Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>(API_URL);
  }


}
