import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  interpolazione!: string
  propertybindig!: string
  nome!: string

  public constructor() {
    this.interpolazione = "binding per interpolazione"
    this.propertybindig = "propertybindig"
    this.nome = "nome preimpostato"
  }

  public eventBinding(): void {
    console.log("event binding")
  }
}
