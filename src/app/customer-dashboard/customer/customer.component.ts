import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../mock-server/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  @Input() data?: Customer;

  visible: boolean = false;

  change: boolean = false;

  showSpinner: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleColor(clickedButton: boolean): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.change = clickedButton;
      this.showSpinner = false;
    }, 300);
  }
}
