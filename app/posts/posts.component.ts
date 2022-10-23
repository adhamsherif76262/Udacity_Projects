import { Component, OnInit } from '@angular/core';
import { Post } from '../Modules/Post';
import { PostService } from '../Services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  Title : String = "My First Angular App";
  Posts: Post[] = [];
  constructor(private postservice:PostService ) { }

  ngOnInit(): void {
    this.postservice.Get_Posts().subscribe(Response=>{
      //The API Response coming from the Json <Dummy Posts> doesn't contain the property votes
      //so we need to add it manually through the For Loop
      for(let i=0; i<Response.length;i++){
        const post=Response[i];
        post["votes"]=0;
      }
      this.Posts=Response;
    })
  }

  Return_Any_String(): string{return "my first angular app";}

  hidepost(post : Post) : void{
    // filter out each post which its ID is not equal to the ID of the post that was passed in
    // In other words filter out the post which its ID is the ID that was emmitted upwareds from the post-item component class
    this.Posts = this.Posts.filter(p=>p.id!==post.id);
    alert("Post Has Been Hidden..");
  }

  Add_Post(post :Post):void{
    this.Posts.unshift(post);
    alert("The Post Has Been Added.");
  }
}
