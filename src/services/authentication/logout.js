import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const logout = () => {
  signOut(auth).then(() => {
    console.log('logged out');
    return true
  })
}