import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterContainerNamePopupComponent } from './enter-container-name-popup.component';

describe('EnterContainerNamePopupComponent', () => {
  let component: EnterContainerNamePopupComponent;
  let fixture: ComponentFixture<EnterContainerNamePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterContainerNamePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterContainerNamePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
