import {Component} from '@angular/core';
import {SharedService} from "../shared-service";

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {


  public constructor(private service: SharedService) {
  }

  emit() {
    this.service.emitValue();
  }
}
