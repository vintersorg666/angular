import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  subject = new Subject<string>()
  public $subject = this.subject.asObservable()

  public emitValue() {
    console.log("emit new value");
    this.subject.next("Hello World")
  }

}
