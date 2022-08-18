import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>
    {
      console.log('param' + paramMap.get('id'))
    })
  }
  facilityForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
    area: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}")]),
    cost:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}")]),
    people:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}")]),
    standardRoom:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    url:new FormControl('',Validators.required),
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
  get url(){
    return  this.facilityForm.get('url')
  }
}
