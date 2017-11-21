import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersRouteComponent } from './markers-route.component';

describe('MarkersRouteComponent', () => {
  let component: MarkersRouteComponent;
  let fixture: ComponentFixture<MarkersRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkersRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkersRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
