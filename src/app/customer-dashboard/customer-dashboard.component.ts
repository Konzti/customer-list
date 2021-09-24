import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer-service.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  customers: any = [];
  title: string = "customer dashboard"
  
  getCustomers(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
      // console.log(this.customers);
    });
  }

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }
}
