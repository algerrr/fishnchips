import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
