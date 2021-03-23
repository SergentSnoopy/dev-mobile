import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, Subject} from 'rxjs';
import {List} from '../models/list';
import {switchMap} from 'rxjs/operators';
import {ListService} from './list.service';

@Injectable({
  providedIn: 'root'
})
export class DbtoListService {

  List = new Subject<List[]>();

  constructor(private afs: AngularFirestore, private listserv: ListService) {

  }
}
