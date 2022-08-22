import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../model/todo";
import {HttpClient} from "@angular/common/http";
import {environment} from "../enviroment/enviroment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(API_URL+'/todo')
  }
  save(todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL + '/todo', todo);
  }
  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/todo/${id}`);
  }

  update(id: number, todo:Todo ): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/todo/${id}`, todo);
  }
  delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/todo/${id}`);
  }
}
