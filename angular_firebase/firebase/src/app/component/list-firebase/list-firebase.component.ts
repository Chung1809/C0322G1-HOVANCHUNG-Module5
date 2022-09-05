import { Component, OnInit } from '@angular/core';
import {Firebase} from "../../model/firebase";
import {Route} from "@angular/router";
import {FirebaseService} from "../../service/firebase.service";

@Component({
  selector: 'app-list-firebase',
  templateUrl: './list-firebase.component.html',
  styleUrls: ['./list-firebase.component.css']
})
export class ListFirebaseComponent implements OnInit {
  firebaseList: Firebase[];
  constructor(private fb: FirebaseService) { }

  ngOnInit(): void {
    this.fb.getList().subscribe(next=>{
      this.firebaseList = next;
    })
  }

}
