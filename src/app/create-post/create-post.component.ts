import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postForm: FormGroup;

  constructor(private database: DatabaseService, private formBuilder: FormBuilder) {
    this.createPost();
  }

  createPost() {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required],
      random:['', Validators.required]
    });
  }

  addPost() {
    const newPost = {
      contenido: this.postForm.value.content,
      random: this.postForm.value.random
    };
    this.database.addDatabase('posts', newPost);

    this.postForm.reset();
  }

}

