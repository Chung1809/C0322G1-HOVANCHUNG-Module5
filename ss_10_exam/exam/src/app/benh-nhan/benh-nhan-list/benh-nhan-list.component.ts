import { Component, OnInit } from '@angular/core';
import {BenhAnService} from "../../benh-an/service/benh-an.service";
import {Medical} from "../../benh-an/model/medical";
import {BenhNhanService} from "../service/benh-nhan.service";
import {Patient} from "../model/patient";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-benh-nhan-list',
  templateUrl: './benh-nhan-list.component.html',
  styleUrls: ['./benh-nhan-list.component.css']
})
export class BenhNhanListComponent implements OnInit {
  patientList: Patient[];
  p: number = 1;
  patientId:number;
  patientName: string
  constructor(private patient: BenhNhanService,
              private toast:ToastrService) { }

  ngOnInit(): void {
    this.patient.getList().subscribe(next=>{
      return this.patientList = next;
    })
  }


  deletePatient(temp: Patient) {
    this.patientId  = temp.id;
    this.patientName = temp.medicalCode.name
  }

  delete(patientId: number) {
    this.patient.delete(patientId).subscribe(()=>{
      this.toast.success("Xoá thành công")
      this.ngOnInit();
    })
  }
}
