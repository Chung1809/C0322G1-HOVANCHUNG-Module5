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
  idDelete: number;
  nameDelete: string;

  constructor(private customerServiceService: CustomerServiceService
    ) {
  }

  ngOnInit(): void {
      this.customerServiceService.getList().subscribe(next=>{
        return this.customerListCustomer = next;
      });
  }


  deleteCustomer(temp: Customer) {
    this.idDelete = temp.id;
    this.nameDelete = temp.name;
  }

  delete(idDelete: number) {
    this.customerServiceService.delete(idDelete).subscribe(next=>{
      this.ngOnInit()
    });
  }
}
