import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angTest-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  public title = 'Child component title';
  public titleArray: string[] = ['Child component title'];

  public addTitleInArray(): void {
    this.titleArray.push(this.title);
  }

}
