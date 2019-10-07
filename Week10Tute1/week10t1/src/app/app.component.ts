import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week10t1';
  selection: Number=1;
  changeSection(newSec: Number):void{
    this.selection=newSec;
  }
}
