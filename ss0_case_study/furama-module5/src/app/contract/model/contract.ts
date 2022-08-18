import {Facility} from "../../facility/model/facility";
import {Customer} from "../../customer/model/customer";

export interface Contract {
  id?:number;
  typeFacility?:Facility;
  typeCustomer?:Customer;
  startDate?:string;
  endDate?:string;
  deposit?:string;
  totalMoney?:string
}
