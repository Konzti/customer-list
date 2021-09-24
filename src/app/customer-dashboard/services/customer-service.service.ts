import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { customerList } from '../mock-server/server';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() {
    this.getCustomers();
  }
  getCustomers(): Observable<{}[]> {
    const customers = of(customerList);
    return customers;
  }
}
