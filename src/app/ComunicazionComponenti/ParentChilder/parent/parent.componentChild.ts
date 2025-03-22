import { Component } from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent-child',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.componentChild.html',
  styleUrl: './parent.componentChild.css'
})
export class ParentComponentChild {

}
