import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigClassComponent } from './big-class.component';

describe('BigClassComponent', () => {
  let component: BigClassComponent;
  let fixture: ComponentFixture<BigClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
