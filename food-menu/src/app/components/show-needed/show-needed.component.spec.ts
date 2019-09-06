import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNeededComponent } from './show-needed.component';

describe('ShowNeededComponent', () => {
  let component: ShowNeededComponent;
  let fixture: ComponentFixture<ShowNeededComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNeededComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
