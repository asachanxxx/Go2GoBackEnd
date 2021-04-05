import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogViwerComponent } from './log-viwer.component';

describe('LogViwerComponent', () => {
  let component: LogViwerComponent;
  let fixture: ComponentFixture<LogViwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogViwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
