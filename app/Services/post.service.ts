import { Injectable } from '@angular/core';
import { Post } from '../Modules/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  Get_Posts():Observable<Post[]>
  {
     return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10");
    // return this.http.get<Post[]>("src/assets/Data.json");

  }

  // Get_Posts(){
  //   return[

  //     {
  //       id:1,
  //       title:"My First Post",
  //       body:"Just Testing This Out",
  //       votes:1,
  //     },
  //     {
  //       id:2,
  //       title:"My Second Post",
  //       body:"Just Testing This Out",
  //       votes:2,
  //     },
  //     {
  //       id:3,
  //       title:"My Third Post",
  //       body:"Just Testing This Out",
  //       votes:3,
  //     }
  //   ];
  // }
}
