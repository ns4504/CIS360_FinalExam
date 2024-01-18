import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecCensusComponent } from './update-census.component';

describe('UpdateBookComponent', () => {
  let component: UpdatecCensusComponent;
  let fixture: ComponentFixture<UpdatecCensusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecCensusComponent]
    });
    fixture = TestBed.createComponent(UpdatecCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
