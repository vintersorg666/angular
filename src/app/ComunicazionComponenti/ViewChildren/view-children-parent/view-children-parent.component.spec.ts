import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenParentComponent } from './view-children-parent.component';

describe('ViewChildrenParentComponent', () => {
  let component: ViewChildrenParentComponent;
  let fixture: ComponentFixture<ViewChildrenParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrenParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildrenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
