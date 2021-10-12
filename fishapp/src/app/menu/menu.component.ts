import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pdfSrc = "../assets/Brigham-FNC.pdf";
  // pdfSrc = "https://www.wildhorseresort.com/wp-content/uploads/2020/10/2020-Brigham-Fish-N-Chips-Menu-1920x1080final10-6-20.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
