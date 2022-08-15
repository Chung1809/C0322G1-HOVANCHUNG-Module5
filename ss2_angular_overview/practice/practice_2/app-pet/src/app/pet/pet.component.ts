import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet:Pet ={
    name:"Dog",
    image:"https://www.google.com.vn/imgres?imgurl=https%3A%2F%2Fphunugioi.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fhinh-nen-chu-cho-dang-vui-dua.jpg&imgrefurl=https%3A%2F%2Fphunugioi.com%2Fhinh-nen-con-cho%2F&tbnid=rLIEUrpFHEkP7M&vet=12ahUKEwj8tP7nxsb5AhXByosBHU1XC-IQMygFegUIARDRAQ..i&docid=v7HYAkGPOyEcHM&w=1920&h=1221&q=h%C3%ACnh%20%E1%BA%A3nh%20dog&ved=2ahUKEwj8tP7nxsb5AhXByosBHU1XC-IQMygFegUIARDRAQ"
};
  constructor() { }

  ngOnInit(): void {
  }

}
