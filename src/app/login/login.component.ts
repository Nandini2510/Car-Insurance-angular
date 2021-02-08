import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../shared/insurance.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public login: InsuranceService) { }

  ngOnInit(): void {
  }

}
