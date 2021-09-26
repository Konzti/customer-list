import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../mock-server/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  @Input() data?: Customer;

  @Output() clicked = new EventEmitter<boolean>();

  clickedButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clickedButton = !this.clickedButton;
    this.clicked.emit(this.clickedButton);
  }
}
