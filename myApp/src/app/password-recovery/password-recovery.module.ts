import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 298f386eeafc547365a0aed3860a5ca11067e356

import { IonicModule } from '@ionic/angular';

import { PasswordRecoveryPageRoutingModule } from './password-recovery-routing.module';

import { PasswordRecoveryPage } from './password-recovery.page';

@NgModule({
<<<<<<< HEAD
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PasswordRecoveryPageRoutingModule,
        ReactiveFormsModule
    ],
=======
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordRecoveryPageRoutingModule
  ],
>>>>>>> 298f386eeafc547365a0aed3860a5ca11067e356
  declarations: [PasswordRecoveryPage]
})
export class PasswordRecoveryPageModule {}
