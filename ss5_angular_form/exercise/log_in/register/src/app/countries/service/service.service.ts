import { Injectable } from '@angular/core';
import {Country} from '../country/country';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  countries: Country[] = [
    {id: 1, name: 'Hà Nội'},
    {id: 2, name: 'Đà Nẵng'},
    {id: 3, name: 'Hoa Thánh'},
  ];
  constructor() { }
  getAll() {
    return this.countries;
  }
}
