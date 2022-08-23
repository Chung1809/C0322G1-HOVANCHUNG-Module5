import {Facility} from "../../facility/model/facility";
import {Customer} from "../../customer/model/customer";

export interface Contract {
  id?:number;
  facility?:Facility;
  customer?:Customer;
  startDate?:string;
  endDate?:string;
  deposit?:string;
  totalMoney?:string
}
