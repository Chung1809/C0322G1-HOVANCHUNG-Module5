import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[A-Z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
    phone:new FormControl('',[Validators.required,Validators.pattern("((84\\)+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7,}")]),
    card: new FormControl('',Validators.pattern("[0-9]{7,12}$")),
    email:new FormControl('',Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$"))
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
}
