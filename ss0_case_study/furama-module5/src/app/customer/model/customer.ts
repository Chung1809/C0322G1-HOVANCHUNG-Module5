import {CustomerType} from "../../customer-type/model/customer-type";


export interface Customer {
  id?:number;
  code?:string;
  typeCustomer?:CustomerType;
  name?:string;
  birthDay?:string;
  gender?:boolean;
  card?:string;
  phone?:string;
  email?:string;
  address?:string;
}
