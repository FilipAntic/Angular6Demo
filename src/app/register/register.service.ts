import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class RegisterService {

  constructor() { }
  token: string;
  signup(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
      response => {
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => {
            this.token = token;
          }
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }
}
