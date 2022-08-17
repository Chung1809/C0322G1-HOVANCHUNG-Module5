import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customer:Customer[] =[
    {id:1,code:'KH-1234',typeCustomer:this.customer.push(),name:'Trần Văn An',birthDay:'16/12/2004',gender:true,card:'197151616'
      ,phone:'0971234567',email:'abc@gmail.com',address:'Đà Nẵng'},
    {id:2,code:'KH-1235',typeCustomer:'Gold',name:'Lê Thị Quỳnh Anh',birthDay:'20/09/1990',gender:false,card:'197151645'
      ,phone:'09612345678',email:'anhtt@gmail.com',address:'Hà Nam'},
    {id:3,code:'KH-1236',typeCustomer:'Diamond',name:'Phạm Thanh Vũ',birthDay:'28/05/2002',gender:true,card:'1971516498'
      ,phone:'09312345678',email:'vutt@gmail.com',address:'Thanh Hoá'},
    {id:4,code:'KH-1237',typeCustomer:'Member',name:'Trần Văn Hoàng',birthDay:'19/05/1999',gender:true,card:'1971519636'
      ,phone:'0971249484',email:'haong123@gmail.com',address:'Hà Nội'},
    {id:5,code:'KH-1238',typeCustomer:'Silver',name:'Nguyễn Thị Vân ',birthDay:'16/05/200',gender:false,card:'197151321'
      ,phone:'0971248949',email:'van1605@gmail.com',address:'Hải Phòng'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
