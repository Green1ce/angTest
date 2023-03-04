import { Component } from '@angular/core';

@Component({
  selector: 'angTest-use-class',
  templateUrl: './use-class.component.html',
  styleUrls: ['./use-class.component.scss']
})
export class UseClassComponent {

  private _string = 'This is UseClassComponent';

  public getString(): string {
    return this._string;
  }

  public setString(str: string): void {
    this._string = str;
  }

}
