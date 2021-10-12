import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  pdfSrc = "../assets/qr_code.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
