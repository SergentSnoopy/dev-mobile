import {Component, Input, OnInit} from '@angular/core';
import {List} from '../list';
import {ListService} from '../../services/list.service';
import {FormBuilder} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Todo} from '../todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: '',
    desc: ''
  });
  @Input() id: string;

  constructor( private listserv: ListService, private activatedRoute: ActivatedRoute,
               private formBuilder: FormBuilder, public modal: ModalController) { }

  ngOnInit() {}

  onSubmit() {
    this.listserv.getLists()[this.id].Todos.push(
        new Todo(this.checkoutForm.value.name, this.checkoutForm.value.desc));
    this.dismiss();
  }

  dismiss() {
    this.modal.dismiss({
      dismissed: true
    });
  }
}
