import {Component} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-child-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './child-parent.component.html',
  styleUrl: './child-parent.component.css'
})
export class ChildParentComponent {


  printOutput(event: string) {
    console.log("ParentComponent printed " + event);
  }
}
