import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderstartComponent } from './headerstart.component';

describe('HeaderstartComponent', () => {
  let component: HeaderstartComponent;
  let fixture: ComponentFixture<HeaderstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
