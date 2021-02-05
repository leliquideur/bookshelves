import { Component } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyCQvvzPnIcZxNMuesQnWvTsq2x4vdriFqg",
      authDomain: "bookshelves-97bcd.firebaseapp.com",
      databaseURL: "https://bookshelves-97bcd-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bookshelves-97bcd",
      storageBucket: "bookshelves-97bcd.appspot.com",
      messagingSenderId: "840381934104",
      appId: "1:840381934104:web:b1791a7b70e1b448b8f16d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
