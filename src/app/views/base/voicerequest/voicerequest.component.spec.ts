import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicerequestComponent } from './voicerequest.component';

describe('VoicerequestComponent', () => {
  let component: VoicerequestComponent;
  let fixture: ComponentFixture<VoicerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
