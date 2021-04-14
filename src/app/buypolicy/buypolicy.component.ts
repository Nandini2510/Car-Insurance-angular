import { Component, OnInit } from '@angular/core';
import { BuypolicyService } from '../shared/buypolicy.service';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-buypolicy',
  templateUrl: './buypolicy.component.html',
  styleUrls: ['./buypolicy.component.css'],
  providers: [BuypolicyService]
})
export class BuypolicyComponent implements OnInit {

  constructor(public service: BuypolicyService) {

  }

  ngOnInit(): void {
  }
  // onClear() {
  //   this.service.form.reset();
  //   this.service.initializeFormGroup();
  // }
  resetForm(Form?: NgForm) {
    if (Form)
      Form.reset();
    // this.service.Form.reset();
    // this.service.initializeFormGroup();




  }
}


