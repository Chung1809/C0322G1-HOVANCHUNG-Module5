import { Component, OnInit } from '@angular/core';
import {BenhNhanService} from "../service/benh-nhan.service";
import {BenhAnService} from "../../benh-an/service/benh-an.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Medical} from "../../benh-an/model/medical";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-benh-nhan-edit',
  templateUrl: './benh-nhan-edit.component.html',
  styleUrls: ['./benh-nhan-edit.component.css']
})
export class BenhNhanEditComponent implements OnInit {
  patientForm: FormGroup;
  medicalList: Medical[];
  patientId: number;
  constructor(private patient: BenhNhanService,
              private medical:BenhAnService,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private toast:ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      this.patientId = +paramMap.get('id');
      this.getBenhNhan(this.patientId)
    })
  }

  ngOnInit(): void {
    this.medical.getList().subscribe((next)=>{
      this.medicalList = next;
    })

  }

  private getBenhNhan(patientId: number) {
     this.patient.findById(patientId).subscribe(next=>{
       this.patientForm = new FormGroup({
         name: new FormControl(next.name,[Validators.required,Validators.pattern("^[A-Z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
         patientCode: new FormControl(next.patientCode,Validators.required),
         startDay: new FormControl(next.startDay,Validators.required),
         endDay: new FormControl(next.endDay,Validators.required),
         doctor: new FormControl(next.doctor,Validators.required),
         medicalCode: new FormControl(next.medicalCode,Validators.required),
         procedure: new FormControl(next.procedure,Validators.required),
         reason: new FormControl(next.reason,Validators.required),
       })
     })
  }
  get name(){
    return this.patientForm.get('name')
  }
  get code(){
    return this.patientForm.get('code')
  }
  get startDay(){
    return this.patientForm.get('startDay')
  }
  get endDay(){
    return this.patientForm.get('endDay')
  }
  get doctor(){
    return this.patientForm.get('doctor')
  } get medicalCode(){
    return this.patientForm.get('medicalCode')
  }
  get procedure(){
    return this.patientForm.get('procedure')
  }
  get reason(){
    return this.patientForm.get('reason')
  }

  submit(patientId: number) {
    const patient = this.patientForm.value;
    this.patient.update(patientId,patient).subscribe(()=>{
      this.toast.success("Sửa thành công");
      this.route.navigate(['/patient'])
    })
  }
  compare(value,option){
    return value.id === option.id
  }
}
