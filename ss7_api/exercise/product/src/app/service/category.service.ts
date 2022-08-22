import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/category');
  }
}
