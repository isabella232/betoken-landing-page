import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfriendsComponent } from './headerfriends.component';

describe('HeaderfriendsComponent', () => {
  let component: HeaderfriendsComponent;
  let fixture: ComponentFixture<HeaderfriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderfriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
