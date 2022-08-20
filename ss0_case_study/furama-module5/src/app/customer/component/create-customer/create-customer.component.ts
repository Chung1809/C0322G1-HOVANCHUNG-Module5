import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../service-customer/customer-service.service";
import {CustomerTypeService} from "../../../customer-type/service-customer-type/customer-type.service";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../../customer-type/model/customer-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: CustomerType[] = [];

  constructor(private customerService: CustomerServiceService,
              private customerTypeService: CustomerTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.customer = this.customerTypeService.getListCustomerType();
  }
  customerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[A-Z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
    phone:new FormControl('',[Validators.required,Validators.pattern("((84\\)+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7,}")]),
    card: new FormControl('',Validators.pattern("[0-9]{7,12}$")),
    email:new FormControl('',Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$")),
    code: new FormControl('',Validators.required),
    id: new FormControl('',Validators.required),
    typeCustomer: new FormControl('',Validators.required),
    birthDay: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    gender: new FormControl(false,Validators.required),
  })
  get name(){
    return this.customerForm.get('name')
  }
  get phone(){
    return this.customerForm.get('phone')
  }
  get card(){
    return this.customerForm.get('card')
  }
  get email(){
    return this.customerForm.get('email')
  }
  get code(){
    return this.customerForm.get('code')
  } get typeCustomer(){
    return this.customerForm.get('typeCustomer')
  }
  get birthDay(){
    return this.customerForm.get('birthDay')
  }
  get address(){
    return this.customerForm.get('address')
  } get gender(){
    return this.customerForm.get('gender')
  }
  get id(){
    return this.customerForm.get('id')
  }



  submit(){
     const customer = this.customerForm.value;
    console.log(customer);
    console.log(this.customerForm.value)
    console.log(this.customerForm.value.gender)
     this.customerService.save(customer)
     this.customerForm.reset();
     this.router.navigate(['/list-customer'])
  }
}
