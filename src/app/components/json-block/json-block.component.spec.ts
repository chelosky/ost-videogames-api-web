import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonBlockComponent } from './json-block.component';

describe('JsonBlockComponent', () => {
  let component: JsonBlockComponent;
  let fixture: ComponentFixture<JsonBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
