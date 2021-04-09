import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  paletteColour
  selected = 1;
  change(n) {
    this.paletteColour = 'warn';
    this.selected = n;
  }

  ngOnInit(): void {
  }

}
