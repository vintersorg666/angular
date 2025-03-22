import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ParentComponentChild} from "./ComunicazionComponenti/ParentChilder/parent/parent.componentChild";
import {ParentComponent} from "./ComunicazionComponenti/ContentChild/parent/parent.component";
import {ChildParentComponent} from "./ComunicazionComponenti/ChildParent/child-parent/child-parent.component";
import {Component2Component} from "./ComunicazionComponenti/brothers/component2/component2.component";
import {Component1Component} from "./ComunicazionComponenti/brothers/component1/component1.component";
import {
  ViewChildParentComponent
} from "./ComunicazionComponenti/ViewChild/view-child-parent/view-child-parent.component";
import {
  ViewChildrenParentComponent
} from "./ComunicazionComponenti/ViewChildren/view-children-parent/view-children-parent.component";
import {BindingComponent} from "./Binding/binding/binding.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponentChild, ParentComponentChild, ParentComponentChild, ParentComponentChild, ParentComponentChild, ParentComponentChild, ParentComponent, ChildParentComponent,
    Component2Component, Component1Component, ViewChildParentComponent, ViewChildrenParentComponent, ParentComponent, BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testangular';
}
