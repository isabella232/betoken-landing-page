import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfundingComponent } from './headerfunding.component';

describe('HeaderfundingComponent', () => {
  let component: HeaderfundingComponent;
  let fixture: ComponentFixture<HeaderfundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderfundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
