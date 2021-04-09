import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private router: Router ){ }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }

}
