import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";

import {enviroment} from "../../enviroment/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL =`${enviroment.apiUrlFacility}`
@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor(private httpClient:HttpClient) {

  }
  getList(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(API_URL)
  }

  save(facility): Observable<Facility> {
    return  this.httpClient.post<Facility>(API_URL,facility)
  }
  findById(id:number): Observable<Facility> {
    return this.httpClient.get(`${API_URL}/${id}`);
  }

  update(id: number, facilities :Facility):Observable<Facility> {
    if (facilities.typeFacility.id == 3) {
      facilities.free = '';
    } else if (facilities.typeFacility.id == 1){
      facilities.free = '';
      facilities.areaPool='';
    } else if (facilities.typeFacility.id == 2){
      facilities.description = '';
      facilities.free = '';
      facilities.floor = null;
      facilities.areaPool = null;
    }
    // for (const item of facilities) {
    //   if (facilities.typeFacility.id == item.id) {
    //     facilities.typeFacility = item;
    //   }
    // }
    // for (const item of this.facility) {
    //   if (facilities.rentType.id == item.id) {
    //     facilities.rentType = item;
    //   }
    return this.httpClient.put<Facility>(`${API_URL}/${id}`,facilities)
  }

  deleteFacility(deleteId: number):Observable<Facility> {
    return this.httpClient.delete(`${API_URL}/${deleteId}`)
  }
}
