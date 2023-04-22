import { Component } from '@angular/core';

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.css']
})
export class VisComponent {
  percent = true
  absolute = false


  setPercent(): void{
    this.percent = true
    this.absolute = false
  }

  setAbsolute(): void{
    this.absolute = true
    this.percent = false
  }

  constructor(){}


}
