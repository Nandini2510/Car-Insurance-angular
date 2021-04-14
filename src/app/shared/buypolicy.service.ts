import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { toPromise } from 'rxjs/operator/toPromise';
import { map } from 'rxjs/operators';
import { Buypolicy } from './buypolicy.model';
@Injectable({
  providedIn: 'root'
})
export class BuypolicyService {
  selectedBuypolicy!: Buypolicy;
  buypolicys!: Buypolicy[];

  constructor() { }
}
