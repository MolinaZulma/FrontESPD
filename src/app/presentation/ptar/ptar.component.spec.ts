import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtarComponent } from './ptar.component';

describe('PtarComponent', () => {
  let component: PtarComponent;
  let fixture: ComponentFixture<PtarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtarComponent]
    });
    fixture = TestBed.createComponent(PtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
