import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeClassComponent } from './fake-class.component';

describe('FakeClassComponent', () => {
  let component: FakeClassComponent;
  let fixture: ComponentFixture<FakeClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
