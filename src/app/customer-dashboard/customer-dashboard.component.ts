import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer-service.service';
import { Customer } from './mock-server/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  customers: Customer[] = [];

  title: string = 'customer dashboard';

  showSpinner: boolean = false;

  getCustomers(): void {
    this.showSpinner = true;
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
      this.showSpinner = false;
    });
  }

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }
}
