import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const login = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password).then((res) => res.user);

  return response
}