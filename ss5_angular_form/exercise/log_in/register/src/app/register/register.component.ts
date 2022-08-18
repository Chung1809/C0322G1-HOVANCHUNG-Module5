import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Country} from '../countries/country/country';
import {CountryComponent} from '../countries/country/country.component';
import {ServiceService} from '../countries/service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Country[] = [];
  registerForm = new FormGroup({
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
    this.register = this.countryService.getAll();
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get country() {
    return this.registerForm.get('country');
  }
}
