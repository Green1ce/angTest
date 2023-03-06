import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angTest-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
})
export class StrategiesComponent implements OnInit {

  public count = 0;

  ngOnInit(): void {
  }

  public increaseCount(): void {
    this.count++;
  }

  private startSetInterval(): void {
    setInterval(() => {
      this.increaseCount();
    }, 1000)
  }

}
