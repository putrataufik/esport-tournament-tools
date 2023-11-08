import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const register = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response
}