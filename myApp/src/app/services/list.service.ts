import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: List[];
  constructor() {
    this.lists = [];
    this.addList(new List('teste'));
    this.addList(new List('teste2'));
  }

  getLists(){
    return this.lists;
  }

  addList(l: List){
    this.lists.push(l);
  }

  addTodo(nbl: number, t: Todo){
    this.lists[nbl].Todos.push(t);
  }

  removeTodo(nbl: number, nbt: number){
    this.lists[nbl].Todos.splice(nbt, 1);
  }
}
