import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public count = 0;

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }

  public reset(): void {
    this.count = 0;
  }
}
