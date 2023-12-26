import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCarsBrandsComponent } from './get-all-cars-brands.component';

describe('GetAllCarsBrandsComponent', () => {
  let component: GetAllCarsBrandsComponent;
  let fixture: ComponentFixture<GetAllCarsBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllCarsBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllCarsBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
