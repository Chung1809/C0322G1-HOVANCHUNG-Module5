import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/enviroment";
import {Observable} from "rxjs";
import {Firebase} from "../model/firebase";
const API_URL =`${environment.apiUrlN}`
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient: HttpClient) {
  }
  getList(): Observable<Firebase[]> {
    return this.httpClient.get<Firebase[]>(API_URL);
  }

  save(file): Observable<Firebase> {
    return this.httpClient.post<Firebase>(API_URL,file)
  }
}
