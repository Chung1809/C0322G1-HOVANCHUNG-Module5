import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service-customer-type/customer-type.service";

@Component({
  selector: 'app-list-customer-type',
  templateUrl: './list-customer-type.component.html',
  styleUrls: ['./list-customer-type.component.css']
})
export class ListCustomerTypeComponent implements OnInit {
   customerTypeList:CustomerType[]
  constructor( private customerType:CustomerTypeService) { }

  ngOnInit(): void {
     this.customerType.getListCustomerType().subscribe(next=>{
       return this.customerTypeList = next;
     })
  }

}
