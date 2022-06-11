import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCcztb_8m2xUfVWd-ofe3qYETg2O1Irpb4',
  projectId: 'webvital-monitoring',
}

const _firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(_firebaseApp)

export { db }
