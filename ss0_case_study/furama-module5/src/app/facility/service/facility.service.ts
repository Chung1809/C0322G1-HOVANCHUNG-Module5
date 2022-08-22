import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facility:Facility[] = [
    {id:1,name:'OCEAN SUITE',typeFacility:{id:1,name:'House'},rentType:{id:1,name:'Year'},area:'58.8',cost:'500',people:'5',standardRoom:'Vip',description:'Ngắm biển',areaPool:'30',floor:5,free:'Vui chơi',url:'/assets/img/9.jpg'},
    {id:2,name:'OCEAN STUDIO SUITE',typeFacility:{id:2,name:'Room'},rentType:{id:2,name:'Month'},area:'40.1',cost:'600',people:'5',standardRoom:'Member',description:'Đi chơi',areaPool:'40',floor:6,free:'Vui chơi',url:'/assets/img/10.jpg'},
    {id:3,name:'OCEAN DELUXE',typeFacility:{id:3,name:'Villa'},rentType:{id:3,name:'Day'},area:'43.7',cost:'700',people:'5',standardRoom:'Long',description:'Ngắm biển',areaPool:'50',floor:7,free:'Vui chơi',url:'/assets/img/11.jpg'},
    {id:4,name:'LAGOON SUPERIOR',typeFacility:{id:2,name:'Room'},rentType:{id:4,name:'Hour'},area:'40.1',cost:'800',people:'5',standardRoom:'Member',description:'Ngắm biển',areaPool:'60',floor:8,free:'Vui chơi',url:'/assets/img/12.jpg'},
    {id:5,name:'GARDEN SUPERIOR',typeFacility:{id:3,name:'Villa'},rentType:{id:1,name:'Year'},area:'40.1',cost:'600',people:'5',standardRoom:'Vip',description:'Ngắm biển',areaPool:'70',floor:9,free:'Vui chơi',url:'/assets/img/13.jpg'},
    {id:6,name:'GARDEN DELUXE',typeFacility:{id:1,name:'House'},rentType:{id:1,name:'Year'},area:'43.7',cost:'900',people:'5',standardRoom:'Long',description:'Ngắm biển',areaPool:'80',floor:10,free:'Vui chơi',url:'/assets/img/14.jpg'},
    {id:7,name:'PRESIDENTIAL SUITE',typeFacility:{id:1,name:'House'},rentType:{id:2,name:'Month'},area:'130',cost:'5000',people:'5',standardRoom:'Vip',description:'Ngắm biển',areaPool:'90',floor:11,free:'Vui chơi',url:'/assets/img/22.jpg'},
    {id:8,name:'BEACH FRONT VILLAS',typeFacility:{id:3,name:'Villa'},rentType:{id:1,name:'Year'},area:'900',cost:'10000',people:'5',standardRoom:'Member',description:'Ngắm biển',areaPool:'100',floor:12,free:'Vui chơi',url:'/assets/img/20.jpg'},
    {id:9,name:'POOL VILLAS',typeFacility:{id:2,name:'Room'},rentType:{id:4,name:'Hour'},area:'320',cost:'7500',people:'5',standardRoom:'Vip',description:'Ngắm biển',areaPool:'120',floor:13,free:'Vui chơi',url:'/assets/img/23.jpg'},
  ]
  constructor() { }
  getList(){
    return this.facility
  }

  save(facility: any) {
    this.facility.push(facility)
  }
  findById(id:number): Facility {
    return this.facility.find(p=> p.id == id);
  }

  update(id: number, facilities :Facility):void {
    for (let i = 0; i < this.facility.length; i++) {
      if (this.facility[i].id === id) {
        this.facility[i] = facilities;
      }
    }
  }

  deleteFacility(deleteId: number):void {
    this.facility = this.facility.filter( p=> {
     return p.id !== deleteId;
   })
  }
}
