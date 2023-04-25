import { IqamahOffset, HardcodedIqamahTimes } from './../components/pages/home-two/prayer-schedule/prayer-schedule.component';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { getDocs } from "firebase/firestore"; 


@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private db: Firestore;

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCcoJg9kN0xqk54DdgJXLjBAvODeW01JVs',
      authDomain: 'up-ng-swinis-website.firebaseapp.com',
      projectId: 'up-ng-swinis-website',
      storageBucket: 'up-ng-swinis-website.appspot.com',
      messagingSenderId: '864939860773',
      appId: '1:864939860773:web:094dda6bd392cf07ce70cc',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async setData() {
    try {
      const docRef = await addDoc(collection(this.db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    try {
      const docRef = await addDoc(collection(this.db, 'users'), {
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getIqamahOffsets(): Promise<IqamahOffset> {
    const querySnapshot = await getDocs(collection(this.db, "iqamah-data"));
    let data: IqamahOffset = {};
    querySnapshot.forEach((doc) => {
      if (doc.data().type === 'offset') {
        data = doc.data();
        delete (data as any)['type']
      }
    });

    return data;
  }

  async getHardcodedTimes(): Promise<HardcodedIqamahTimes> {
    const querySnapshot = await getDocs(collection(this.db, "iqamah-data"));
    let data: HardcodedIqamahTimes = {};
    querySnapshot.forEach((doc) => {
      if (doc.data().type === 'hardcoded') {
        data = doc.data();
        delete (data as any)['type']
      }
    });

    return data;
  }

}
