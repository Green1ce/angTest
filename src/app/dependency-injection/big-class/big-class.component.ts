import { Component } from '@angular/core';

@Component({
  selector: 'angTest-big-class',
  templateUrl: './big-class.component.html',
  styleUrls: ['./big-class.component.scss']
})
export class BigClassComponent {

  public getString(): string {
    return 'This is big class string';
  }

  public getNumber(): number {
    return 6;
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNull(): null {
    return null;
  }

  public getObject(): Object {
    return {
      name: 'Volodia',
      age: '25',
    };
  }

}
