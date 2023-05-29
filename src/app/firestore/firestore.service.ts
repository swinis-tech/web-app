import {
  HardcodedIqamahTimes,
  IqamahOffset,
} from '../components/pages/home-two/prayer-schedule/prayer-schedule.component';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { doc, Firestore, getDoc, getFirestore } from 'firebase/firestore';

const firestoreCollection = 'iqamah-data';

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

  async getIqamahOffsets(): Promise<IqamahOffset> {
    const docRef = doc(this.db, firestoreCollection, 'iqamah-offset');
    const docSnap = await getDoc(docRef);

    let data: IqamahOffset = {};
    if (docSnap.exists()) {
      data = docSnap.data();
    }

    return data;
  }

  async getHardcodedTimes(): Promise<HardcodedIqamahTimes> {
    const docRef = doc(this.db, firestoreCollection, 'hardcoded-iqamah');
    const docSnap = await getDoc(docRef);

    let data: HardcodedIqamahTimes = {};
    if (docSnap.exists()) {
      data = docSnap.data();
    }

    return data;
  }
}
