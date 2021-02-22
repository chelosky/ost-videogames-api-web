import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableTopVgComponent } from './datatable-top-vg.component';

describe('DatatableTopVgComponent', () => {
  let component: DatatableTopVgComponent;
  let fixture: ComponentFixture<DatatableTopVgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableTopVgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableTopVgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
