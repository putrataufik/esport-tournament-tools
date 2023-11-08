import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

export const checkAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user
    }
    return null
  })
}