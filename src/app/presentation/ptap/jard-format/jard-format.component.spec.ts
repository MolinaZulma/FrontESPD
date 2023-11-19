import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardFormatComponent } from './jard-format.component';

describe('JardFormatComponent', () => {
  let component: JardFormatComponent;
  let fixture: ComponentFixture<JardFormatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JardFormatComponent]
    });
    fixture = TestBed.createComponent(JardFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
