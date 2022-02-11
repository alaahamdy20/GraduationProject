import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivedProductComponent } from './new-arrived-product.component';

describe('NewArrivedProductComponent', () => {
  let component: NewArrivedProductComponent;
  let fixture: ComponentFixture<NewArrivedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
