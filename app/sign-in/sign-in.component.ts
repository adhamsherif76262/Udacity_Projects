import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  Username:string='';
  Password:string='';
  constructor() { }

  ngOnInit(): void {
  }

  On_Submit():void{
    alert(`${this.Username} has successfully signed in!`);
  }

}
