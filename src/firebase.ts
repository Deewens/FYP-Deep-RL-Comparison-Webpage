import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'portfolio-ed3bb.firebaseapp.com',
  databaseURL: 'https://portfolio-ed3bb-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'portfolio-ed3bb',
  storageBucket: 'portfolio-ed3bb.appspot.com',
  messagingSenderId: '564639925496',
  appId: '1:564639925496:web:25567474c2a9ee08e2270d',
  measurementId: 'G-K589BZ7945',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getDatabase(app)