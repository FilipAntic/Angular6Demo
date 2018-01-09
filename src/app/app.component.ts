import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBXp5mCxZsg5cJ3GBdmFHq4jR2rj34TLh8",//ovde se stavlja odredjeni apiKey
      authDomain: "loginapi-4b4b2.firebaseapp.com" // ovde se stvalja domain
    })
  }
  primer: number = 0;
  text: string = '';
}
