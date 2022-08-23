import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../service-customer/customer-service.service";
import {CustomerTypeService} from "../../../customer-type/service-customer-type/customer-type.service";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../../customer-type/model/customer-type";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  constructor(private customerService: CustomerServiceService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private toast:ToastrService) { }

  ngOnInit(): void {
     this.customerTypeService.getListCustomerType().subscribe(next=>{
       this.customerTypes = next;
     });
    this.customerForm = new FormGroup({
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

  // checkAge(abstractControl: AbstractControl):any{
  //   const date = new Date(abstractControl.value);
  //   const now = new Date();
  //   if(now.getFullYear() - date.getFullYear() > 18){
  //     return null;
  //   }else if(now.getFullYear() - date.getFullYear() <= 18){
  //     if(now.getMonth() > date.getMonth()){
  //       return null;
  //     }else {
  //       if(now.getMonth() < date.getMonth()){
  //         if(now.getDate() > date.getDate()){
  //           return null;
  //         }else {
  //           return {not:true}
  //         }
  //       }else {
  //         return {not: true}
  //       }
  //     }
  //   }else {
  //     return {not: true}
  //   }
  // }


  submit(){
     const customer = this.customerForm.value;
     this.customerService.save(customer).subscribe(next=>{
      if(!customer.valid){
        this.toast.success("Create customer successfully!")
        this.customerForm.reset();
        this.router.navigate(['/customer'])
      }else {
        this.toast.error("Create fails!")
      }
     })
  }
}
