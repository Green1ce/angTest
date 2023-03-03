import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angTest-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public buttonList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createButtonList();
  }

  private createButtonList(): void {
    this.buttonList = ['home', 'form', 'inf-scroll', 'dynamic'];
  }

}
