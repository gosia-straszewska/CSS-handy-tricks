import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomOnHoverComponent } from './zoom-on-hover.component';

describe('ZoomOnHoverComponent', () => {
  let component: ZoomOnHoverComponent;
  let fixture: ComponentFixture<ZoomOnHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomOnHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
