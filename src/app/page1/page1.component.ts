import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName: string = 'Page 1';

  constructor() { }

  // ngOnInit runs after the constructor
  ngOnInit(): void {
    setTimeout(() => {
      this.pageName = 'First Page';
    }, 3000);
  }

}
