import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIT2095';
  counter: number = 0;
  incCounter() {
    this.counter++;
  }
}
