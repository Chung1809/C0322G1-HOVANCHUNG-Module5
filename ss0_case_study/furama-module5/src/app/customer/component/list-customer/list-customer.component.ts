import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerServiceService} from "../../service-customer/customer-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] ;
  constructor(private customerServiceService: CustomerServiceService) { }

  ngOnInit(): void {
    this.customerList = this.customerServiceService.getList();
  }

}
