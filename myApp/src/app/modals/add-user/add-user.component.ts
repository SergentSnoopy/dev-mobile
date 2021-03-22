import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../models/list';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  li: List;
  checkoutForm = this.formBuilder.group({
    mail: ['', Validators.required]
  });
  constructor(private listserv: ListService, private formBuilder: FormBuilder, public modal: ModalController) { }

  ngOnInit() {
    console.log(this.li);
  }

  dismiss() {
    this.modal.dismiss({
      dismissed: true
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm.value.mail);
      this.li.owners.push(this.checkoutForm.value.mail);
      this.listserv.addOwner(this.li);
      this.dismiss();
    }
  }
}
