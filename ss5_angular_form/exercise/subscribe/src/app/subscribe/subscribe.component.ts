import { Component, OnInit } from '@angular/core';
import {Country} from '../countries/country/country';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../countries/service/service.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribe: Country[] = [];
  subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.minLength(6)),
    confirmPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
  }, this.validatePassword );

  constructor(private countryService: ServiceService) {
  }

  validatePassword(abstractControl: AbstractControl): any {
    return abstractControl.value.password === abstractControl.value.confirmPassword ? null : {mismatched : true};
  }

  ngOnInit(): void {
    this.subscribe = this.countryService.getAll();
  }

  get email() {
    return this.subscribeForm.get('email');
  }

  get password() {
    return this.subscribeForm.get('password');
  }

  get confirmPassword() {
    return this.subscribeForm.get('confirmPassword');
  }

  get phone() {
    return this.subscribeForm.get('phone');
  }

  get gender() {
    return this.subscribeForm.get('gender');
  }

  get age() {
    return this.subscribeForm.get('age');
  }

  get country() {
    return this.subscribeForm.get('country');
  }

}
