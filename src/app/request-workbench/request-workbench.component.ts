import {Component, Input ,OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-request-workbench',
  templateUrl: './request-workbench.component.html',
  styleUrls: ['./request-workbench.component.css']
})
export class RequestWorkbenchComponent implements OnInit {

  @Input() max: any;
  tomorrow = new Date();
   
  constructor() {
  this.tomorrow.setDate(this.tomorrow.getDate());
  }
  
  ngOnInit(): void {
  }

}
