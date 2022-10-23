import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../Modules/Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post : Post;
  @Output() Hide_Post: EventEmitter<Post> = new EventEmitter;
  constructor() {
    this.post={
        id:0,
        title:"",
        body:"",
        votes:0,
    }
  }

  ngOnInit(): void {
  }

  Thums_Up(post:Post): Post{
    post.votes++;
    return post;
  }

  Thums_Down(post:Post): Post{
    if(post.votes!=0)
    {
      post.votes--;
    }
    else
    {
      post.votes=0;
    }
    return post;
  }

  Hide(post:Post): void{
    this.Hide_Post.emit(post);
  }
}
