import { Component } from '@angular/core';
import {ListService} from '../services/list.service';
import {List} from '../models/list';
import {ModalController} from '@ionic/angular';
import {CreateListComponent} from '../modals/create-list/create-list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list: List[];
  constructor(private listserv: ListService, public modal: ModalController) {

    this.list = this.listserv.getLists();
  }

  async presentModal() {
    const modal = await this.modal.create({
      component: CreateListComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modal.getTop()
    });
    return await modal.present();
  }

}
