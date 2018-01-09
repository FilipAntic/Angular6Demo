import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
  token: string;
  constructor() { }
  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
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

    console.log(firebase.auth().currentUser)
  }

}
