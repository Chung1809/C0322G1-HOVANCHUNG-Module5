import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  deleteId:number;
  deleteName:string;
 facilities:Facility[] = []
  constructor(private facility:FacilityService
              ) { }

  ngOnInit(): void {
   this.facility.getList().subscribe(next=>{
     return this.facilities = next;
   });
  }

  deleteFacility(temp: Facility) {
   this.deleteId = temp.id;
   this.deleteName = temp.name;
  }

  delete(deleteId: number) {
    this.facility.deleteFacility(deleteId).subscribe(next=>{
      this.ngOnInit();
    });

  }
}
