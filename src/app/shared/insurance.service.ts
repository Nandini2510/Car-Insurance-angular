import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Buypolicy } from './buypolicy.model';
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  // selectedBuypolicy!: Buypolicy;
  // buypolicy!: Buypolicy[];

  constructor() {

  }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    brandno: new FormControl('', Validators.required),
    Model: new FormControl('', Validators.required),
    mobileno: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Fuel: new FormControl('1'),
    dateofregistration: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      $fullname: '',
      brandno: '',
      Model: '',
      prevpolicy: '',
      mobileno: '',
      Fuel: '1',
      dateofregistration: ''

    })
  }
  form2: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl(''),
    prevpolicy: new FormControl(''),
    brandno: new FormControl(''),


    dateofregistration: new FormControl('')
  });

  form3: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl(''),

    password: new FormControl(''),



  });



}
