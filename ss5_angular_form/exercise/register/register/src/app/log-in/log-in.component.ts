import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logIn = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@(.+)$')]),
    password: new FormControl('', Validators.pattern('^[A-Za-z0-9]{6,}')),
  })
  get email() {
    return this.logIn.get('email');
  }

  get password() {
    return this.logIn.get('password');
  }
}
