import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AddedComponentComponent } from './component/added-component.component';

@Component({
  selector: 'angTest-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent {

  @ViewChild('dynamic', { read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<AddedComponentComponent>;

  public addDynamicComponent(): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(AddedComponentComponent);
  }

  public removeDynamicComponent(): void {
    this.viewRef.clear();
  }
}
