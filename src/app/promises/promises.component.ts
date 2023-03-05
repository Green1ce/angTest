import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angTest-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  public promiseResult: string | number = '0.0000';

  private errorMessage = 'it is not fine :(';

  ngOnInit(): void {
    this.getPromisesResult();
    this.getPromiseAll(this.createPrimisesArray(3));
    this.getPromiseRace(this.createPrimisesArray(3));
  }

  private createRandomPromise(delay: number): Promise<string | number> {
    return new Promise((res, rej) => {
      let randomNumb1 = Math.random();
      setTimeout(() => {
        randomNumb1 < 0.8 ? res(randomNumb1) : rej(this.errorMessage)
      }, randomNumb1 * delay);
    });
  }

  private createPrimisesArray(number: number): Promise<string | number>[] {
    let arr = [];

    for (let i = 0; i < number; i++) {
      arr.push(this.createRandomPromise(i * 100));
    };

    return arr;
  }

  private getPromisesResult(): void {
    const promise1 = this.createRandomPromise(100);
    const promise2 = this.createRandomPromise(500);
    const promise3 = this.createRandomPromise(1000);

    promise1
    .then(res1 => {
      console.log(res1);
      return promise2;
    })
    .then(res2 => {
      console.log(res2);
      return promise3;
    })
    .then(res3 => {
      console.log(res3);
      this.promiseResult = res3 as string;
    })
    .catch(error => {
      this.promiseResult = error;
      console.log(error);
    });
  }

  private getPromiseAll(promises: Promise<string | number>[]): void {
    Promise.all(promises)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  private getPromiseRace(promises: Promise<string | number>[]): void {
    Promise.race(promises)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }
}
