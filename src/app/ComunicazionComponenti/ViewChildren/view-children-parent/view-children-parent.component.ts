import {AfterViewInit, Component, QueryList, ViewChildren} from '@angular/core';
import {ViewChildrenChildComponent} from "../view-children-child/view-children-child.component";

@Component({
  selector: 'app-view-children-parent',
  standalone: true,
  imports: [
    ViewChildrenChildComponent
  ],
  templateUrl: './view-children-parent.component.html',
  styleUrl: './view-children-parent.component.css'
})
export class ViewChildrenParentComponent implements AfterViewInit {
  @ViewChildren(ViewChildrenChildComponent) children: QueryList<ViewChildrenChildComponent> | undefined


  public constructor() {
    console.log('parentComponentChild ', this.children!); // qua non è ancora disponibile
  }

  ngAfterViewInit() {
    console.log('parentComponentChild ngAfterViewInit', this.children!.length);// qua  è ancora disponibile
    this.children?.forEach(item => item.print())
  }
}
