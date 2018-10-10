import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  postList$: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.postList$ = this.database.list('/posts');
    console.log(this.postList$)
   }

  addDatabase(path, object) {
    this.database.list(path).push(object);
  }

  getPosts(path) {
    return this.database.list(path).snapshotChanges().pipe(map(
      snapshotPosts => {//lo que me retorna
        const result = [];

        for (let i = 0; i < snapshotPosts.length; i++) {
          const snapshotPost = snapshotPosts[i];
          const postValue = snapshotPost.payload.val();
          postValue['key'] = snapshotPost.payload.key;
          result.push(postValue);
          console.log(postValue)
        }
        return result;
      }));
  }

  deletePost(key) {
    this.database.object(`posts/${key}`).remove();
  }
}
