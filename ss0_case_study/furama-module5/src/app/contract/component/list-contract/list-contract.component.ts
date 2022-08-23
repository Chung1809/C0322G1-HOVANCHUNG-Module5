import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts:Contract[] = []

  constructor( private contract:ContractService) { }

  ngOnInit(): void {
    this.contract.getList().subscribe(next=>{
      this.contracts = next;
    });
  }

}
