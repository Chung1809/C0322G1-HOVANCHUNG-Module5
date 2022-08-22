import { Injectable } from '@angular/core';
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  rentType: RentType[] = [
    {id:1,name:'Year'},
    {id:2,name:'Month'},
    {id:3,name:'Day'},
    {id:4,name:'Hour'},
  ]
  constructor() { }
  getList(){
    return this.rentType;
  }
}
