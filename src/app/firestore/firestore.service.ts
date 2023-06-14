import {
  HardcodedIqamahTimes,
  IqamahOffset,
} from '../components/pages/home-two/prayer-schedule/prayer-schedule.component';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  doc,
  Firestore,
  getDoc,
  getDocFromCache,
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore';

export type PrayerData = {
  hardcodedIqamah: HardcodedIqamahTimes;
  iqamahOffset: IqamahOffset;
  friday: {
    adhan: string;
    iqamah: string;
    name: "jumu'ah 1" | "jumu'ah 2";
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private readonly db: Firestore;

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
    initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    });
    this.db = getFirestore(app);
  }

  async getData(): Promise<PrayerData> {
    const docRef = doc(this.db, 'prayers', 'prayerData');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as PrayerData;
    }

    throw 'No such document!';
  }

  async getDataFromCache(): Promise<PrayerData> {
    const docRef = doc(this.db, 'prayers', 'prayerData');
    const docSnap = await getDocFromCache(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as PrayerData;
    }

    throw 'No such document!';
  }
}
