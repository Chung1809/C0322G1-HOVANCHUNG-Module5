import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../../customer/service-customer/customer-service.service";
import {FacilityType} from "../../../facility-type/model/facility-type";
import {Router} from "@angular/router";
import {Customer} from "../../../customer/model/customer";
import {FacilityTypeService} from "../../../facility-type/service-facility-type/facility-type.service";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  customers:Customer[] = [];
  facilityTypeList:FacilityType[] = [];
  constructor(private customer:CustomerServiceService,
              private facilityType:FacilityTypeService,
              private router:Router,
              private contract:ContractService) { }

  ngOnInit(): void {
    this.customers = this.customer.getList();
    this.facilityTypeList = this.facilityType.getList();
  }
  contractForm = new FormGroup({
    deposit:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}$")]),
    totalMoney:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}$")]),
    typeFacility: new FormControl('',Validators.required),
    typeCustomer: new FormControl('',Validators.required),
    id: new FormControl('',Validators.required),
    startDate: new FormControl('',Validators.required),
    endDate: new FormControl('',Validators.required),
  })
  get deposit(){
     return this.contractForm.get('deposit');
  }
  get totalMoney(){
    return this.contractForm.get('totalMoney');
  }
  get typeFacility(){
    return this.contractForm.get('typeFacility');
  }
  get typeCustomer(){
    return this.contractForm.get('typeCustomer');
  }
  get endDate(){
    return this.contractForm.get('endDate');
  }
  get startDate(){
    return this.contractForm.get('startDate');
  }
  get id(){
    return this.contractForm.get('id');
  }

  submit() {
    const contract = this.contractForm.value
    this.contract.save(contract);
    this.contractForm.reset();
    this.router.navigate(['/list-contract'])
  }
}
