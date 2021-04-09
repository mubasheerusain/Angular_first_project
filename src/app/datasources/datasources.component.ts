import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasources',
  templateUrl: './datasources.component.html',
  styleUrls: ['./datasources.component.css']
})
export class DatasourcesComponent implements OnInit {

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
