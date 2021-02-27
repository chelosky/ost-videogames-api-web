import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestBlockComponent } from './http-request-block.component';

describe('HttpRequestBlockComponent', () => {
  let component: HttpRequestBlockComponent;
  let fixture: ComponentFixture<HttpRequestBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRequestBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequestBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
