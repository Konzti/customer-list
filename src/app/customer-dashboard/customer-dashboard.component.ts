import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './mock-server/customer';
import { CustomerService } from './services/customer-service.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  customers?: Observable<Customer[]>;
  title: string = 'customer dashboard';
  visible: boolean = false;
  change: boolean = false;
  showSpinner: boolean = false;
  test: Customer | any = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customers = this.customerService.getCustomers();
  }

  toggleColor(event: Customer): void {
    this.test = event;
  }

  toggleTest(event: boolean): void {
    this.change = event;
  }
}
