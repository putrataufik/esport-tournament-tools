import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase"

export const createTournament = async (data) => {
  try {
    const colectionRef = collection(db, 'Tournaments')

    const doc = await addDoc(colectionRef, data)

    return doc
  } catch (error) {
    return null
  }
}