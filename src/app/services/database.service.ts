import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  postList$: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.postList$ = this.database.list('/posts');
   }
  addDatabase(path, object) {
    this.database.list(path).push(object);
  }
}
