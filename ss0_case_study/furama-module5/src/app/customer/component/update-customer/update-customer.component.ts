import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../../customer-type/service-customer-type/customer-type.service";
import {CustomerType} from "../../../customer-type/model/customer-type";
import {Customer} from "../../model/customer";
import {CustomerServiceService} from "../../service-customer/customer-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerType:CustomerType[] =[];
  customerId: number;
  customerForm: FormGroup;
  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private customerServiceService: CustomerServiceService,
               private customerTypeList: CustomerTypeService,
               private toast:ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>
    {
      this.customerId = +paramMap.get('id');
      console.log(this.customerId)
     this.getCustomer(this.customerId)


    })
  }

  ngOnInit(): void {
    this.customerTypeList.getListCustomerType().subscribe(next=>{
      return this.customerType = next;
    })
  }
  getCustomer(id: number) {
    return this.customerServiceService.findById(id).subscribe(c => {
      return this.customerForm = new FormGroup({
        id: new FormControl(c.id,Validators.required),
        code: new FormControl(c.code,Validators.required),
        typeCustomer: new FormControl(c.typeCustomer,Validators.required),
        name: new FormControl(c.name,[Validators.required,Validators.pattern("^[A-Za-z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
        birthDay: new FormControl(c.birthDay,Validators.required),
        gender: new FormControl(c.gender,Validators.required),
        card: new FormControl(c.card,Validators.pattern("[0-9]{7,12}$")),
        phone:new FormControl(c.phone,[Validators.required,Validators.pattern("((84\\)+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7,}")]),
        email:new FormControl(c.email,Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$")),
        address: new FormControl(c.address,Validators.required),

      });
    });
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
  get id1(){
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



  update(customerId:number){
    const customer = this.customerForm.value
    this.customerServiceService.update(customerId,customer).subscribe(next=>{
       this.toast.success("Update successfully!")
       this.router.navigate(['/customer'])
    })
  }
  compare(value,option): boolean{
    return value.id === option.id;
    console.log(value);
    console.log(option);
  }
}
