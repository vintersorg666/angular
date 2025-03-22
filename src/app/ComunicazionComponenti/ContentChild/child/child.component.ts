import {AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements AfterContentInit {

  @ContentChild('projected') projectedElement!: ElementRef;

  @ContentChild('tableElement') tableElement!: ElementRef;

  ngAfterContentInit() {
    console.log('Elemento proiettato:', this.projectedElement.nativeElement.innerText);
    this.projectedElement.nativeElement.innerText = this.projectedElement.nativeElement.innerText + ' modificato'

  }

  public change() {
    this.tableElement.nativeElement.style.border = '2px solid blue'; // Modifica il bordo
  }

}
