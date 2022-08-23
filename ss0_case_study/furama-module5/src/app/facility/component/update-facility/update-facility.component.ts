import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../../facility-type/service-facility-type/facility-type.service";
import {RentTypeService} from "../../../rent-type/service/rent-type.service";
import {FacilityType} from "../../../facility-type/model/facility-type";
import {RentType} from "../../../rent-type/model/rent-type";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facilityId: number;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  idFacility: number;
  facilityForm:FormGroup;
  constructor( private activatedRoute: ActivatedRoute,
               private facilityType: FacilityTypeService,
               private rentType: RentTypeService,
               private facilityList: FacilityService,
               private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>
    {
      this.facilityId = +paramMap.get('id')
      const facility = this.facilityList.findById(this.facilityId)
      this.facilityForm = new FormGroup({
        name: new FormControl(facility.name,[Validators.required,Validators.pattern("[A-Za-z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
        area: new FormControl(facility.area,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        cost:new FormControl(facility.cost,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        people:new FormControl(facility.people,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        standardRoom:new FormControl(facility.standardRoom,Validators.required),
        description:new FormControl(facility.description,Validators.required),
        url:new FormControl(facility.url,Validators.required),
        typeFacility:new FormControl(facility.typeFacility,Validators.required),
        rentType:new FormControl(facility.rentType,Validators.required),
        free:new FormControl(facility.free,Validators.required),
        id:new FormControl(facility.id,Validators.required),
        areaPool:new FormControl(facility.areaPool,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        floor:new FormControl(facility.floor,[Validators.required,Validators.pattern("[0-9]{1,}")]),
      })
    })

  }

  ngOnInit(): void {
    this.rentTypeList = this.rentType.getList();
    this.facilityTypeList = this.facilityType.getList();

  }
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

  submit(facilityId: number) {
    const facility = this.facilityForm.value;
    this.facilityList.update(facilityId,facility);
    this.facilityForm.reset();
    this.router.navigate(['/list-facility'])
  }

 compareFacilityType(value,option){
    return value.id === option.id;
 }
  changeFacility(value: any) {
    return this.idFacility = value;
  }
  compareRentType(value,option){
    return value.id === option.id;
  }

}
