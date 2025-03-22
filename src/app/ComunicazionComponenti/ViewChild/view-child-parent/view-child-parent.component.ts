import {Component, OnInit, ViewChild} from '@angular/core';
import {ViewChildChildComponent} from "../view-child-child/view-child-child.component";
import {ChildParentComponent} from "../../ChildParent/child-parent/child-parent.component";

@Component({
  selector: 'app-view-child-parent',
  standalone: true,
  imports: [
    ViewChildChildComponent
  ],
  templateUrl: './view-child-parent.component.html',
  styleUrl: './view-child-parent.component.css'
})
export class ViewChildParentComponent implements OnInit {

  @ViewChild(ViewChildChildComponent) child = new ViewChildChildComponent();

  public constructor() {
    console.log("viewChildParentComponent ");
    this.child.print()
  }

  ngOnInit(): void {
    console.log("viewChildParentComponent ngOnInit");
    this.child.print()
  }


}
