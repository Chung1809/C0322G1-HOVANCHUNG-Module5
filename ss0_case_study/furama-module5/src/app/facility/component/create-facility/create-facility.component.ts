import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityTypeService} from "../../../facility-type/service-facility-type/facility-type.service";
import {RentTypeService} from "../../../rent-type/service/rent-type.service";
import {Router} from "@angular/router";
import {FacilityService} from "../../service/facility.service";
import {FacilityType} from "../../../facility-type/model/facility-type";
import {RentType} from "../../../rent-type/model/rent-type";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  constructor(private facility:FacilityService,
              private facilityType:FacilityTypeService,
              private rentType:RentTypeService,
              private router:Router) { }

  ngOnInit(): void {
    this.facilityList = this.facilityType.getList();
    this.rentTypeList = this.rentType.getList();
  }
  facilityForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
    area: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}")]),
    cost:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}")]),
    people:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}")]),
    standardRoom:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    url:new FormControl('',Validators.required),
    typeFacility:new FormControl('',Validators.required),
    rentType:new FormControl('',Validators.required),
    free:new FormControl('',Validators.required),
    id:new FormControl('',Validators.required),
    areaPool:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}")]),
    floor:new FormControl('',[Validators.required,Validators.pattern("[0-9]{1,}")]),
  })
  get name(){
   return  this.facilityForm.get('name')
  }
  get area(){
    return  this.facilityForm.get('area')
  }
  get cost(){
    return  this.facilityForm.get('cost')
  }
  get people(){
    return  this.facilityForm.get('people')
  }
  get standardRoom(){
    return  this.facilityForm.get('standardRoom')
  }
  get description(){
    return  this.facilityForm.get('description')
  }
  get areaPool(){
    return  this.facilityForm.get('areaPool')
  }
  get floor(){
    return  this.facilityForm.get('floor')
  }
  get id(){
    return  this.facilityForm.get('id')
  }
  get url(){
    return  this.facilityForm.get('url')
  }
  get free(){
    return  this.facilityForm.get('free')
  }
  get typeFacility(){
    return  this.facilityForm.get('typeFacility')
  }
  get rentType1(){
    return  this.facilityForm.get('rentType')
  }



  saveFacility() {
    const facility = this.facilityForm.value;
    this.facility.save(facility);
    this.facilityForm.reset();
    this.router.navigate(['/list-facility'])

  }

  change(value: any) {
    
  }
}
