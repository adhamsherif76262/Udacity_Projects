import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 Users:any=[];

  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.httpservice.Get_Users().subscribe(Users_Data=>{
    this.Users=Users_Data;
    })
  }

}
