import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerTypeService} from "../../customer-type/service-customer-type/customer-type.service";
import {ListCustomerTypeComponent} from "../../customer-type/component/list-customer-type/list-customer-type.component";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  // @ts-ignore
  customer:Customer[] =[
    {
      id:1,code:'KH-1234',
      typeCustomer:{id:1,name:'Diamond'},
      name:'Trần Văn An',
      birthDay:'16/12/2004',
      gender:true,
      card:'197151616'
      ,phone:'0971234567',
      email:'abc@gmail.com',address:'Đà Nẵng'
    },
    {id:2,code:'KH-1235',typeCustomer:{id:2,name:'Platinum'},name:'Lê Thị Quỳnh Anh',birthDay:'20/09/1990',gender:false,card:'197151645'
      ,phone:'09612345678',email:'anhtt@gmail.com',address:'Hà Nam'},
    {id:3,code:'KH-1236',typeCustomer:{id:3,name:'Gold'},name:'Phạm Thanh Vũ',birthDay:'28/05/2002',gender:true,card:'1971516498'
      ,phone:'09312345678',email:'vutt@gmail.com',address:'Thanh Hoá'},
    {id:4,code:'KH-1237',typeCustomer:{id:4,name:'Silver'},name:'Trần Văn Hoàng',birthDay:'19/05/1999',gender:true,card:'1971519636'
      ,phone:'0971249484',email:'haong123@gmail.com',address:'Hà Nội'},
    {id:5,code:'KH-1238',typeCustomer:{id:5,name:'Member'},name:'Nguyễn Thị Vân ',birthDay:'16/05/200',gender:false,card:'197151321'
      ,phone:'0971248949',email:'van1605@gmail.com',address:'Hải Phòng'},

  ]
  constructor() { }

  getList(){
    return this.customer;
  }
}
