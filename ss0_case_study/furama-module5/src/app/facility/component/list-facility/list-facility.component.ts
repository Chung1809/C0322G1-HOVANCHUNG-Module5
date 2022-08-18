import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

 facilities:Facility[] = []
  constructor(private facility:FacilityService) { }

  ngOnInit(): void {
   this.facilities = this.facility.getList();
  }

}
