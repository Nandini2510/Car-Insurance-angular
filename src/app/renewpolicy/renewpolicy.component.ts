import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../shared/insurance.service';

@Component({
  selector: 'app-renewpolicy',
  templateUrl: './renewpolicy.component.html',
  styleUrls: ['./renewpolicy.component.css']
})
export class RenewpolicyComponent implements OnInit {

  constructor(public renew: InsuranceService) { }

  ngOnInit(): void {
  }
  onClear() {
    this.renew.form.reset();
    this.renew.initializeFormGroup();
  }
}
