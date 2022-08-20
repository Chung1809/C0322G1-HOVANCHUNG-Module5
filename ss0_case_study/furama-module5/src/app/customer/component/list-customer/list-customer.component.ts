import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerServiceService} from "../../service-customer/customer-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../../customer-type/service-customer-type/customer-type.service";
import {CustomerType} from "../../../customer-type/model/customer-type";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerListCustomer: Customer[];
  customerTypeList: CustomerType[];
  idDelete: number;
  nameDelete: string;

  constructor(private customerServiceService: CustomerServiceService
    , private customerTypeService: CustomerTypeService,) {
  }

  ngOnInit(): void {
    this.customerListCustomer = this.customerServiceService.getList();
    this.customerTypeList = this.customerTypeService.getListCustomerType();
  }


  deleteCustomer(temp: Customer) {
    this.idDelete = temp.id;
    this.nameDelete = temp.name;
  }

  delete(idDelete: number) {
    this.customerServiceService.delete(idDelete);
    this.ngOnInit()
  }
}
