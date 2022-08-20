import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../../customer-type/service-customer-type/customer-type.service";
import {CustomerType} from "../../../customer-type/model/customer-type";
import {Customer} from "../../model/customer";
import {CustomerServiceService} from "../../service-customer/customer-service.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerType: CustomerType[] = this.customerTypeList.getListCustomerType();
  customerId: number;
  customerForm: FormGroup;
  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private customer: CustomerServiceService,
               private customerTypeList: CustomerTypeService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>
    {
      this.customerId = +paramMap.get('id');
      console.log(this.customerId)
      const customer = this.customer.findById(this.customerId)
      console.log(customer)
      this.customerForm = new FormGroup({
        name: new FormControl(customer.name,[Validators.required,Validators.pattern("^[A-Za-z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
        phone:new FormControl(customer.phone,[Validators.required,Validators.pattern("((84\\)+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7,}")]),
        card: new FormControl(customer.card,Validators.pattern("[0-9]{7,12}$")),
        email:new FormControl(customer.email,Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$")),
        code: new FormControl(customer.code,Validators.required),
        id: new FormControl(customer.id,Validators.required),
        typeCustomer: new FormControl(customer.typeCustomer,Validators.required),
        birthDay: new FormControl(customer.birthDay,Validators.required),
        address: new FormControl(customer.address,Validators.required),
        gender: new FormControl(customer.gender,Validators.required),
      })
    })
  }

  ngOnInit(): void {

  }

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
  get id(){
    return this.customerForm.get('id')
  }
  get code(){
    return this.customerForm.get('code')
  }
  get typeCustomer(){
    return this.customerForm.get('typeCustomer')
  }
  get birthDay(){
    return this.customerForm.get('birthDay')
  }
  get address(){
    return this.customerForm.get('address')
  }
  get gender(){
    return this.customerForm.get('gender')
  }


  //  getCustomer(customerId: number) {
  //    this.customer.findById(customerId);
  //   console.log(this.customer.findById(customerId))
  // }
  update(customerId:number){
    const customer = this.customerForm.value
    this.customer.update(customerId,customer)
    this.customerForm.reset();
    this.router.navigate(['/list-customer'])
  }
}
