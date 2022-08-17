import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contract:Contract[] = [
    {id:1,typeFacility:'House',typeCustomer:'Lê Thị Quỳnh Anh',startDate:'18/12/2017',endDate:'20/05/2022',deposit:'1000',totalMoney:'50000'},
    {id:2,typeFacility:'Room',typeCustomer:'Trần Văn An',startDate:'28/03/2016',endDate:'22/06/2022',deposit:'2000',totalMoney:'60000'},
    {id:3,typeFacility:'Villa',typeCustomer:'Phạm Thanh Vũ',startDate:'22/04/2015',endDate:'19/07/2022',deposit:'3000',totalMoney:'70000'},
    {id:4,typeFacility:'House',typeCustomer:'Trần Văn Hoàng',startDate:'12/05/2020',endDate:'05/08/2022',deposit:'4000',totalMoney:'80000'},
    {id:5,typeFacility:'Room',typeCustomer:'Nguyễn Thị Vân',startDate:'17/06/2021',endDate:'13/09/2022',deposit:'5000',totalMoney:'90000'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
