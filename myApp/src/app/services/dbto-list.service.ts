import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, Subject} from "rxjs";
import {List} from "../models/list";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DbtoListService {

  items$: Observable<List[]>;

  constructor(afs: AngularFirestore) {
    const size$ = new Subject<string>();
    const queryObservable = size$.pipe(
        switchMap(size =>
            afs.collection('items', ref => ref.where('size', '==', size)).valueChanges()
        )
    );

// subscribe to changes
    queryObservable.subscribe(queriedItems => {
      console.log(queriedItems);
    });

// trigger the query
    size$.next('large');

// re-trigger the query!!!
    size$.next('small');


  }
}
