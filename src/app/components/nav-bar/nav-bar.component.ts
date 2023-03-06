import { Component } from '@angular/core';

@Component({
  selector: 'angTest-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public linksList: string[] = [
    'home',
    'form',
    'inf-scroll',
    'dynamic',
    'dependency',
    'promises',
    'strategies',
  ];
}
