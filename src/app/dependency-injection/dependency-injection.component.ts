import { Component, Inject, OnInit } from '@angular/core';
import { SOME_STR, SOME_TRUE, USE_FACTORY } from '../shared/constants/CONST';
import { ReducedBigClassComponent } from '../shared/interfaces/big-class.component';
import { BigClassComponent } from './big-class/big-class.component';
import { FakeClassComponent } from './fake-class/fake-class.component';
import { UseClassComponent } from './use-class/use-class.component';

@Component({
  selector: 'angTest-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {

  public result = 'Open console for check result';

  constructor(@Inject(SOME_TRUE) public someTrue: boolean,
              @Inject(SOME_STR) public someString: string,
              @Inject(USE_FACTORY) private factory: string,
              private useClass: UseClassComponent,
              private bigClass: BigClassComponent,
              private fakeClass: FakeClassComponent,) { }

  ngOnInit(): void {
    this.printDataFromUseClass();
    this.printDataFromBigClass();
    this.printDataFromFakeClass();
    console.log(this.factory);
  }

  private printDataFromUseClass(): void {
    console.log(`From UseClass: ${this.useClass.getString()}`);
    this.useClass.setString('new string');
  }

  private printDataFromBigClass(): void {
    console.log(`From BigClass: ${this.bigClass.getString()}`);
    console.log(`From BigClass: ${this.bigClass.getNumber()}`);
  }

  private printDataFromFakeClass(): void {
    console.log(`From FakeClass: ${this.fakeClass.getNumber()}`);
  }

}
