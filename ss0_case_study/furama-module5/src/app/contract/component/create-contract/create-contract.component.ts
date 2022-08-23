import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../../customer/service-customer/customer-service.service";
import {FacilityType} from "../../../facility-type/model/facility-type";
import {Router} from "@angular/router";
import {Customer} from "../../../customer/model/customer";
import {FacilityTypeService} from "../../../facility-type/service-facility-type/facility-type.service";
import {ContractService} from "../../service/contract.service";
import {ToastrService} from "ngx-toastr";
import {FacilityService} from "../../../facility/service/facility.service";
import {Facility} from "../../../facility/model/facility";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  customers:Customer[] = [];
  facilityList:Facility[] = [];
  constructor(private customer:CustomerServiceService,
              private facility:FacilityService,
              private router:Router,
              private contract:ContractService,
              private toast:ToastrService) { }

  ngOnInit(): void {
    this.customer.getList().subscribe(next=>{
      return this.customers = next;
    });
     this.facility.getList().subscribe(next=>{
       return this.facilityList = next;
     });
  }
  contractForm = new FormGroup({
    deposit:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}$")]),
    totalMoney:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}$")]),
    facility: new FormControl('',Validators.required),
    customer: new FormControl('',Validators.required),
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
    return this.contractForm.get('facility');
  }
  get typeCustomer(){
    return this.contractForm.get('customer');
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
    this.contract.save(contract).subscribe(()=>{
     if(!contract.valid){
       this.contractForm.reset();
       this.toast.success("Create successfully!")
       this.router.navigate(['/contract'])
     }else {
       this.toast.error("Create fails!")
     }
    });

  }
}
