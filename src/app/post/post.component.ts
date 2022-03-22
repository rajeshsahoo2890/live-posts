import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?:Post;
  @Input() key:number=0;
  constructor(private Postservivce:PostService) { }

  ngOnInit(): void {
    console.log(this.post);
  }
  OnDelete(){
    console.log('delete');
    console.log(this.key);
    this.Postservivce.deletPost(this.key);
  }

}
