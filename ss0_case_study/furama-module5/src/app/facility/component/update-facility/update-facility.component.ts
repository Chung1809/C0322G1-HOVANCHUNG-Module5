import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../../facility-type/service-facility-type/facility-type.service";
import {RentTypeService} from "../../../rent-type/service/rent-type.service";
import {FacilityType} from "../../../facility-type/model/facility-type";
import {RentType} from "../../../rent-type/model/rent-type";
import {ToastrService} from "ngx-toastr";
import {log} from "util";

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
               private router: Router,
               private toast:ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.facilityId = +paramMap.get('id')
      this.getFacility(this.facilityId)
    })

  }
  getFacility(facilityId: number) {
    return this.facilityList.findById(facilityId).subscribe(next=>{
      return this.facilityForm = new FormGroup({
        name: new FormControl(next.name,[Validators.required,
          Validators.pattern("[A-Za-z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
        area: new FormControl(next.area,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        cost:new FormControl(next.cost,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        people:new FormControl(next.people,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        standardRoom:new FormControl(next.standardRoom,Validators.required),
        description:new FormControl(next.description,Validators.required),
        url:new FormControl(next.url,Validators.required),
        typeFacility:new FormControl(next.typeFacility,Validators.required),
        rentType:new FormControl(next.rentType,Validators.required),
        free:new FormControl(next.free,Validators.required),
        id:new FormControl(next.id),
        areaPool:new FormControl(next.areaPool,[Validators.required,Validators.pattern("^[0-9]{1,}")]),
        floor:new FormControl(next.floor,[Validators.required,Validators.pattern("[0-9]{1,}")]),
      })
    })
  }


  ngOnInit(): void {
     this.facilityType.getList().subscribe(next=>{
       return this.facilityTypeList = next;
     });
     this.rentType.getList().subscribe(next=>{
       return this.rentTypeList = next;
     });

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
    console.log(facility)
      this.facilityList.update(facilityId,facility).subscribe(next=> {
        this.router.navigate(['/facility']);
        this.toast.success("Update successfully!")
        }
      )
  }

 compareFacilityType(value,option): boolean{
   console.log(value)
   console.log(option)
    return value.id === option.id;

 }

  changeFacility(event: any) {
    console.log(event)
    console.log(event.target.value)
    return this.idFacility = event.target.value;

  }

}
