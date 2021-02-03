import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {List} from '../../models/list';
import {ListService} from '../../services/list.service';
import {CreateListComponent} from '../../modals/create-list/create-list.component';
import {ModalController} from '@ionic/angular';
import {CreateTodoComponent} from '../../models/create-todo/create-todo.component';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.page.html',
  styleUrls: ['./list-details.page.scss'],
})
export class ListDetailsPage implements OnInit {
  private list: List;

  constructor(private activatedRoute: ActivatedRoute, private listserv: ListService, public modal: ModalController) { }

  ngOnInit() {
    this.list = this.listserv.getLists()[this.activatedRoute.snapshot.paramMap.get('myid')];
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
}
