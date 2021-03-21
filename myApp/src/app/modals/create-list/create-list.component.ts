import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {ListService} from '../../services/list.service';
import {List} from '../../models/list';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss'],
})
export class CreateListComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: ''
  });

  constructor(private listserv: ListService, private formBuilder: FormBuilder, public modal: ModalController) { }

  onSubmit() {
    this.listserv.addList(new List(this.checkoutForm.value.name));
    this.dismiss();
  }

  dismiss() {
    this.modal.dismiss({
      dismissed: true
    });
  }
  ngOnInit() {}

}
