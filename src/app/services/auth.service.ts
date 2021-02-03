import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createNewUser(email: string, password: string) {
    /* j'ai du rajouter void sur les 2 promise*/
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  signInUser(email: string, password: string) {
      return new Promise<void>(
        (resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(email, password).then(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        }
      );
  }
  signOutUser() {
    firebase.auth().signOut();
  }
}
