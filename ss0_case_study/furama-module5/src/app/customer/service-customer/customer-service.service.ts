import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerTypeService} from "../../customer-type/service-customer-type/customer-type.service";
import {ListCustomerTypeComponent} from "../../customer-type/component/list-customer-type/list-customer-type.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../enviroment/enviroment";
const API_URL =`${enviroment.apiUrlCustomer}`
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {


  constructor(private httpClient:HttpClient) {
  }

  getList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL);
  }

  save(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL,customer)
  }

  delete(id: number):Observable<Customer> {
    return this.httpClient.delete<Customer>(`${API_URL}/${id}`)
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get(`${API_URL}/${id}`);
  }

  update(id: number, customer: Customer):Observable<Customer> {
    return this.httpClient.put<Customer>(`${API_URL}/${id}`,customer)
  }
}
