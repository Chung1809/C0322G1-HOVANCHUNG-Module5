import { Injectable } from '@angular/core';
import {FacilityType} from "../model/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityType:FacilityType[] = [
    {id:1,name:'House'},
    {id:2,name:'Room'},
    {id:3,name:'Villa'},
  ]
  constructor() { }
}
