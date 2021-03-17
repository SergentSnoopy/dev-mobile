import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { Todo } from '../models/todo';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthentService} from './authent.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: AngularFirestoreCollection<List>;

  constructor(private afs: AngularFirestore, private auth: AuthentService) {
    this.auth.getConnectedUser().subscribe(plop => {
      if (plop != null) {
        this.lists = this.afs.collection('Lists', ref => ref.where('owners', 'array-contains' , plop.email  ));
      }
    });

  }

  getLists(): Observable<List[]>{
    return this.lists.snapshotChanges().pipe(map(actions => this.SnapshotToData<List>(actions)));
  }

  getOne(id: string){
    return this.lists.doc<List>(id).valueChanges().pipe(switchMap(list =>
        this.lists.doc(id).collection<Todo>('Todos').snapshotChanges().pipe(
            map(actions => {
              list.Todos = this.SnapshotToData<Todo>(actions);
              return list;
            })
        )));
  }


  async addList(l: List) {
      this.auth.getConnectedUser().subscribe(async plop => {
          if (plop != null) {
              l.owners.push(plop.email);
              await this.lists.doc(l.id).set({owners: l.owners, id: l.id, Todos: l.Todos, Name: l.Name});
          }
      });
  }

    async addOwner(l: List) {
        this.auth.getConnectedUser().subscribe(async plop => {
            if (plop != null) {
                await this.lists.doc(l.id).update({owners: l.owners, id: l.id, Todos: l.Todos, Name: l.Name});
            }
        });
    }

  async addTodo(IdL: string, t: Todo) {
    await this.lists.doc<List>(IdL).collection<Todo>('Todos').doc(t.id).set({
      id: t.id,
      Name: t.Name,
      Description: t.Description,
      isDone: t.isDone
    });
  }

  async removeList(l: List) {
      l.Todos.forEach(t => {this.removeTodo(l.id, t); });
      await this.lists.doc<List>(l.id).delete();
  }

  async removeTodo(IdL: string, t: Todo) {
    await this.lists.doc<List>(IdL).collection<Todo>('Todos').doc<Todo>(t.id).delete();
  }

  private SnapshotToData<T>(actions) {
    return actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {id, ...data}as T;
    });
  }
}
