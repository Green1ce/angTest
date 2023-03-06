import { Component } from '@angular/core';

@Component({
  selector: 'angTest-fake-class',
  templateUrl: './fake-class.component.html',
  styleUrls: ['./fake-class.component.scss']
})
export class FakeClassComponent {

  private _string = 'This is FakeClassComponent';

  public getString(): string {
    return this._string;
  }

  public getNumber(): number {
    return 5;
  }

  public setString(str: string): void {
    this._string = str;
  }

}
