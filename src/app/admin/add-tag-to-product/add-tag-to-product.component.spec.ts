import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagToProductComponent } from './add-tag-to-product.component';

describe('AddTagToProductComponent', () => {
  let component: AddTagToProductComponent;
  let fixture: ComponentFixture<AddTagToProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTagToProductComponent]
    });
    fixture = TestBed.createComponent(AddTagToProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
