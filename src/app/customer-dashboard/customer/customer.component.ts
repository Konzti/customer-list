import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  @Input() data?: any;
  visible: boolean = false;
  change: boolean = false;
  showSpinner: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  
  toggleColor(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.change = !this.change;
      this.showSpinner = false;
    }, 300);
  }
}
