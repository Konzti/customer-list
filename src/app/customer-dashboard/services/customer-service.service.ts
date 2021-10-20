import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../mock-server/customer';
import { customerList } from '../mock-server/server';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() {
    this.getCustomers();
  }
  getCustomers(): Observable<Customer[]> {
    const customers = of(customerList);
    return customers;
  }
}
