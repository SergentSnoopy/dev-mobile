import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {List} from '../../models/list';
import {ListService} from '../../services/list.service';
import {CreateListComponent} from '../../modals/create-list/create-list.component';
import {ModalController} from '@ionic/angular';
import {CreateTodoComponent} from '../../models/create-todo/create-todo.component';
import {Observable} from 'rxjs';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.page.html',
  styleUrls: ['./list-details.page.scss'],
})
export class ListDetailsPage implements OnInit {
  list: List;
  listObs$: Observable<List>;

  constructor(private activatedRoute: ActivatedRoute, private listserv: ListService, public modal: ModalController) {}

  ngOnInit() {
    this.listObs$ = this.listserv.getOne(this.activatedRoute.snapshot.paramMap.get('myid'));
    this.listObs$.subscribe(c => {
      this.list = c;
    });

  }

  async presentModal() {
    const modal = await this.modal.create({
      component: CreateTodoComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        id: this.activatedRoute.snapshot.paramMap.get('myid')
      },
      presentingElement: await this.modal.getTop()
    });
    return await modal.present();
  }


  removeTodo(idl: string , t: Todo) {
    console.log(t.id);
    this.listserv.removeTodo(idl, t);
  }
}
