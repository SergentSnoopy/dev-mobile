import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthentService} from '../services/authent.service';


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {

  public reset: FormGroup;
  public withEmail: boolean;

  constructor( private formBuilder: FormBuilder,
               private toastController: ToastController, private route: Router,
               private auth: AuthentService) {
    this.withEmail = false;
    this.reset = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  async resestpasswordForm(){
    if (this.reset.valid) {
      try {
        await this.auth.resetPassword(this.reset.get('email').value);
        this.route.navigate(['']);
      } catch (e) {
        const toast = await this.toastController.create({
          color: 'danger',
          duration: 2000,
          message: e.message
        });

        await toast.present();
      }
    }
  }

  ngOnInit(): void {
  }
}
