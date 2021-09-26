import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    FormsModule,
    CustomerDashboardModule,
    FlexLayoutModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
