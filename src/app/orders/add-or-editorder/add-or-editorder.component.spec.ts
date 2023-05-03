import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditorderComponent } from './add-or-editorder.component';

describe('AddOrEditorderComponent', () => {
  let component: AddOrEditorderComponent;
  let fixture: ComponentFixture<AddOrEditorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEditorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
