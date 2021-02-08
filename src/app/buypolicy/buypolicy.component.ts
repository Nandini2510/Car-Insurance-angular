import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../shared/insurance.service';

@Component({
  selector: 'app-buypolicy',
  templateUrl: './buypolicy.component.html',
  styleUrls: ['./buypolicy.component.css']
})
export class BuypolicyComponent implements OnInit {

  constructor(public service: InsuranceService) { }

  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
