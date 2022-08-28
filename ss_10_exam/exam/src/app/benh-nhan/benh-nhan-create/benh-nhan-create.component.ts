import { Component, OnInit } from '@angular/core';
import {BenhNhanService} from "../service/benh-nhan.service";
import {BenhAnService} from "../../benh-an/service/benh-an.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Medical} from "../../benh-an/model/medical";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-benh-nhan-create',
  templateUrl: './benh-nhan-create.component.html',
  styleUrls: ['./benh-nhan-create.component.css']
})
export class BenhNhanCreateComponent implements OnInit {
  medicalList: Medical[];
  patientForm: FormGroup;
  constructor(private patient: BenhNhanService,
              private medical: BenhAnService,
              private router: Router,
              private toast:ToastrService) { }

  ngOnInit(): void {
    this.patient.getList().subscribe(next=>{
      return this.medicalList = next;
    });
    this.patientForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern("^[A-Z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+")]),
      patientCode: new FormControl('',Validators.required),
      startDay: new FormControl('',Validators.required),
      endDay: new FormControl('',Validators.required),
      doctor: new FormControl('',Validators.required),
      medicalCode: new FormControl('',Validators.required),
      procedure: new FormControl('',Validators.required),
      reason: new FormControl('',Validators.required),
    })
  }
  get name(){
    return this.patientForm.get('name')
  }
  get code(){
    return this.patientForm.get('patientCode')
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

  submit() {
    const patient = this.patientForm.value;
    this.patient.save(patient).subscribe(next=>{
      this.toast.success("Thêm mới thành công")
      this.patientForm.reset();
      this.router.navigate(['/patient'])
    })
  }
}
