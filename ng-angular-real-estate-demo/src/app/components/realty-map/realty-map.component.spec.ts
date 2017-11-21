import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyMapComponent } from './realty-map.component';

describe('RealtyMapComponent', () => {
  let component: RealtyMapComponent;
  let fixture: ComponentFixture<RealtyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
