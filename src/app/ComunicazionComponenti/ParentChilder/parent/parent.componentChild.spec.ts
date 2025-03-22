import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentChild } from './parent.componentChild';

describe('ParentComponent', () => {
  let component: ParentComponentChild;
  let fixture: ComponentFixture<ParentComponentChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponentChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponentChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
