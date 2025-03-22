import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  @Input() input: string | undefined

  public constructor() {
    console.log('ChildComponent constructor ' + this.input); // this.input  è undefined
  }

  ngOnInit(): void {
    console.log('ChildComponent initialized ' + this.input);// this.input  è valorizzato
  }


}
