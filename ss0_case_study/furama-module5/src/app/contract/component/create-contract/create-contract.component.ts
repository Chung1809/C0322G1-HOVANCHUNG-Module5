import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contractForm = new FormGroup({
    deposit:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}$")]),
    totalMoney:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}$")])
  })
  get deposit(){
     return this.contractForm.get('deposit');
  }
  get totalMoney(){
    return this.contractForm.get('totalMoney');
  }
}
