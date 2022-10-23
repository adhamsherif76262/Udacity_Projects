import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  Post_Title:string='';
  Post_Body:string='';
  @Output() addpost :EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  Submit_Form():void{
    const post={
      title:this.Post_Title,
      body:this.Post_Body,
      votes:0
    }
    this.addpost.emit(post);
    this.Post_Title='';
    this.Post_Body='';
  }

}
