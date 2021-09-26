import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../mock-server/customer';
import { customerList } from '../mock-server/server';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(public httpClient: HttpClient) {}

  customerURL: string = 'https://fakestoreapi.com/users';

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.customerURL);
  }
}
