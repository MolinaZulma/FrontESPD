import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCrudViewComponent } from './generic-crud-view.component';

describe('GenericCrudViewComponent', () => {
  let component: GenericCrudViewComponent;
  let fixture: ComponentFixture<GenericCrudViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCrudViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericCrudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
