import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, Subject} from 'rxjs';
import {List} from '../models/list';
import {switchMap} from 'rxjs/operators';
import {ListService} from './list.service';

@Injectable({
  providedIn: 'root'
})





// todo Faire ça dans list service plutot qu'ici






export class DbtoListService {

  List = new Subject<List[]>();

  constructor(private afs: AngularFirestore, private listserv: ListService) {

  }

/*
  async getList(id : string){
    const queryObservable = this.List.pipe(
        switchMap(list =>
            this.afs.collection('Lists').valueChanges()
        )
    );

// subscribe to changes
    queryObservable.subscribe(queriedItems => {
      console.log(queriedItems);
      queriedItems.forEach(n => {this.listserv.addList(new List(n['name'])); });
      queriedItems.forEach(n => {console.log(n); });

    });
    this.List.next();
  }
*/
}
