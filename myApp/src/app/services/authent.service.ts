import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  private user$: BehaviorSubject<firebase.default.User>;

  constructor( private afAuth: AngularFireAuth,
               private af: AngularFirestore ) {
    this.user$ = new BehaviorSubject(null);
    this.afAuth.onAuthStateChanged(user =>
        this.user$.next(user));
  }

  getConnectedUser(){
    return this.user$.asObservable();
  }

  async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(mail: string){
    return await this.afAuth.sendPasswordResetEmail(mail);
  }

  async logout() {
    return await this.afAuth.signOut();
  }

  async register(email: string, password: string) {
    const cred = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
    );

    await cred.user.sendEmailVerification();
    return cred.user;
  }
}
