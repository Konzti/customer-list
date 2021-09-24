import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  @Input() data?: any;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  clickedButton: boolean = false;

  onClick(): void {
    this.clicked.emit();
    this.clickedButton = !this.clickedButton;
  }

  constructor() {}

  ngOnInit(): void {}
}
