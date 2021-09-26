import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerDetailComponent,
    CustomerComponent,
  ],

  imports: [CommonModule, MaterialModule, HttpClientModule],

  exports: [CustomerDashboardComponent],
})
export class CustomerDashboardModule {}
