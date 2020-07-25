import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCoreLibComponent } from './ngx-core-lib.component';

describe('NgxCoreLibComponent', () => {
  let component: NgxCoreLibComponent;
  let fixture: ComponentFixture<NgxCoreLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCoreLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCoreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
