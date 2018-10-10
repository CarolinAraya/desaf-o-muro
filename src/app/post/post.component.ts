import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from '../services/database.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts$;

  constructor(private formBuilder: FormBuilder, private database: DatabaseService) {
    this.posts$ = database.getPosts(`/posts`);
    //console.log(this.posts)
  }

  ngOnInit() {
  }

  deletePost(key){

      this.database.deletePost(key)

  }

}
