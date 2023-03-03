import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, scan } from 'rxjs';

@Component({
  selector: 'angTest-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {

  total = 100;
  data = Array.from({length: this.total}).map((_, i) => `Option ${i}`);
  limit = 10;
  offset = 0;
  options = new BehaviorSubject<string[]>([]);
  options$: Observable<string[]>;

  constructor() {
    this.options$ = this.options.asObservable().pipe(
      scan((acc, curr) => {
        return [...acc, ...curr]
      })
    );
  }

  ngOnInit(): void {
    this.getNextBatch();
  }

  getNextBatch() {
    const result = this.data.slice(this.offset, this.offset + this.limit);
    this.options.next(result);
    this.offset += this.limit;
  }

}
