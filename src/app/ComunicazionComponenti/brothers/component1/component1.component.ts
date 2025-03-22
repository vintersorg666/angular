import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared-service";

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component implements OnInit {


  public constructor(private service: SharedService) {

  }

  ngOnInit(): void {
    console.log("Component1ComponentNgOnInit");
    this.service.$subject.subscribe(value => {
      console.log("value", value)
    })
  }

}
