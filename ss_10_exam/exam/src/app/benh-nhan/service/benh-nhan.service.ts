import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Medical} from "../../benh-an/model/medical";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroment/enviroment";
import {Patient} from "../model/patient";
const API_URL =`${environment.apiUrlN}`
@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private httpClient:HttpClient) { }
  getList(): Observable<Patient[]> {
    return this.httpClient.get<Medical[]>(API_URL );
  }

  save(customer): Observable<Patient> {
    return this.httpClient.post<Patient>(API_URL,customer)
  }

  delete(id: number):Observable<Patient> {
    return this.httpClient.delete<Patient>(`${API_URL}/${id}`)
  }

  findById(id: number): Observable<Patient> {
    return this.httpClient.get(`${API_URL}/${id}`);
  }

  update(id: number, benhNhan: Patient):Observable<Patient> {
    return this.httpClient.put<Patient>(`${API_URL}/${id}`,benhNhan)
  }
}
