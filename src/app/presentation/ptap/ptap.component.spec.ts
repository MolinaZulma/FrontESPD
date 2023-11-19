import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtapComponent } from './ptap.component';

describe('PtapComponent', () => {
  let component: PtapComponent;
  let fixture: ComponentFixture<PtapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtapComponent]
    });
    fixture = TestBed.createComponent(PtapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
