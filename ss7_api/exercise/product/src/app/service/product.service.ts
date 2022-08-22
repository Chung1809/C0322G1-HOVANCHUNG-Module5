import { Injectable } from '@angular/core';
import {environment} from "../enviroment/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

const API_URL =`${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL +'/product')
  }
  saveProduct(product):Observable<Product>{
    return this.httpClient.post<Product>(API_URL +'/product',product);
  }
  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/product/${id}`);
  }

  updateCategory(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${API_URL}/product/${id}`, product);
  }

  deleteCategory(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API_URL}/product/${id}`);
  }
}
