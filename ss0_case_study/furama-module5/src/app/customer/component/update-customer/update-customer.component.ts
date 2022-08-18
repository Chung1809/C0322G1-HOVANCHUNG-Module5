import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>
    {
      console.log('param' + paramMap.get('id'))
    })
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
