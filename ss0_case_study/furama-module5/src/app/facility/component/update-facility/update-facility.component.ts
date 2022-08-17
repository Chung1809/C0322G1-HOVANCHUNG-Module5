import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

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
}
