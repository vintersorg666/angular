import {Component} from '@angular/core';

@Component({
  selector: 'app-view-children-child',
  standalone: true,
  imports: [],
  templateUrl: './view-children-child.component.html',
  styleUrl: './view-children-child.component.css'
})
export class ViewChildrenChildComponent {


  print() {
    console.log("ViewChildrenChildComponent printed");
  }

}
