import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtapFormatComponent } from './ptap-format.component';

describe('PtapFormatComponent', () => {
  let component: PtapFormatComponent;
  let fixture: ComponentFixture<PtapFormatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtapFormatComponent]
    });
    fixture = TestBed.createComponent(PtapFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
