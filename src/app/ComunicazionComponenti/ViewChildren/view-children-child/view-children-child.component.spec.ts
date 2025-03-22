import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenChildComponent } from './view-children-child.component';

describe('ViewChildrenChildComponent', () => {
  let component: ViewChildrenChildComponent;
  let fixture: ComponentFixture<ViewChildrenChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrenChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildrenChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
