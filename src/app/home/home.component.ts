import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angTest-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Home page';

  constructor() { }

  ngOnInit(): void {
  }

}
