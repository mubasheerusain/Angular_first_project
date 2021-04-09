import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workbenches',
  templateUrl: './workbenches.component.html',
  styleUrls: ['./workbenches.component.css']
})
export class WorkbenchesComponent implements OnInit {

  constructor() { }

  paletteColour
  selected = 1;
  change(n) {
    this.paletteColour = 'warn';
    this.selected = n;
    console.log(this.selected);
  }
  
  ngOnInit(): void {
  }

}
