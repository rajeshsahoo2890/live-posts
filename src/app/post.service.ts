import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPosts: Post[] = [
    new Post(
      'Nature11',
      'Terst Content !! Terst Content !!Terst Content !!Terst Content !!Terst Content !!',
      'https://image.shutterstock.com/image-photo/large-drop-water-reflects-environment-260nw-1917029711.jpg',
      'test@test1.com',
      new Date()
    ),
    new Post(
      'Nature2',
      'Terst Content !! Terst Content !!Terst Content !!Terst Content !!Terst Content !!',
      'https://image.shutterstock.com/image-photo/large-drop-water-reflects-environment-260nw-1917029711.jpg',
      'test@test1.com',
      new Date()
    ),
    new Post(
      'Nature3',
      'Terst Content !! Terst Content !!Terst Content !!Terst Content !!Terst Content !!',
      'https://image.shutterstock.com/image-photo/large-drop-water-reflects-environment-260nw-1917029711.jpg',
      'test@test1.com',
      new Date()
    ),
  ];

  //Facility1
  getPost(){
    return this.listOfPosts;
  }

  //facility2
  deletPost(index:number){
    return this.listOfPosts.splice(index,1);
  }

  //facility 3
  addPost(post: Post){
    return this.listOfPosts.push(post);
  }

  //facility 4
  updatePost(index:number,post:Post){
    this.listOfPosts[index]=post;
  }
}
