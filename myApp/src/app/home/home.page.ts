import { Component } from '@angular/core';
import {ListService} from '../services/list.service';
import {List} from '../models/list';
import {ModalController} from '@ionic/angular';
import {CreateListComponent} from '../modals/create-list/create-list.component';
import {AddUserComponent} from '../modals/add-user/add-user.component';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { AuthentService } from 'src/app/services/authent.service';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list: List[];
  constructor(private listserv: ListService, 
              public modal: ModalController, 
              private route: Router, 
              private auth: AuthentService) {

    this.listserv.getLists().subscribe(c => {this.list = c; });

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

  async logout() {
    await this.auth.logout();
    window.location.reload()
  }

  removeList(l: List) {
    this.listserv.removeList(l);
  }

  async presentModalAddUser(l: List) {
    const modal = await this.modal.create({
      component: AddUserComponent,
      componentProps: {
        li: l
      },
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modal.getTop()
    });
    return await modal.present();
  }
}
