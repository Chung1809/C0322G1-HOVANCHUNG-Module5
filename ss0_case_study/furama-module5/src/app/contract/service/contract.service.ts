import { Injectable } from '@angular/core';
import {Contract} from "../model/contract";
import {CustomerServiceService} from "../../customer/service-customer/customer-service.service";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contract:Contract[] = [
    {id:1,typeFacility:{id:1,name:'House'},typeCustomer:{id:1,name:'Lê Thị Quỳnh Anh'},startDate:'18/12/2017',endDate:'20/05/2022',deposit:'1000',totalMoney:'50000'},
    {id:2,typeFacility:{id:2,name:'Room'},typeCustomer:{id:2,name:'Trần Văn An'},startDate:'28/03/2016',endDate:'22/06/2022',deposit:'2000',totalMoney:'60000'},
    {id:3,typeFacility:{id:3,name:'Villa'},typeCustomer:{id:3,name:'Phạm Thanh Vũ'},startDate:'22/04/2015',endDate:'19/07/2022',deposit:'3000',totalMoney:'70000'},
    {id:4,typeFacility:{id:1,name:'House'},typeCustomer:{id:4,name:'Trần Văn Hoàng'},startDate:'12/05/2020',endDate:'05/08/2022',deposit:'4000',totalMoney:'80000'},
    {id:5,typeFacility:{id:3,name:'Villa'},typeCustomer:{id:5,name:'Nguyễn Thị Vân'},startDate:'17/06/2021',endDate:'13/09/2022',deposit:'5000',totalMoney:'90000'},
  ]
  constructor() { }
  getList(){
    return this.contract
  }

  save(contract: any) {
    this.contract.push(contract);
  }
}
