import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const getTournaments = async () => {
  const collectionRef = collection(db, 'Tournaments');

  const response = await getDocs(collectionRef);
  const data = response.docs.map(doc => doc.data())

  return data;
}