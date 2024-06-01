import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
// import axios from 'axios'
import useAxiosCommon from '../hooks/useAxiosCommon'
// import axios from 'axios'
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const axiosCommon = useAxiosCommon()
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = async () => {

    setUser(null);
    setLoading(true)
    signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // Get token from server
  // const getToken = async email => {
  //   const { data } = await axios.post(
  //     `${import.meta.env.VITE_API_URL}/jwt`,
  //     { email },
  //     { withCredentials: true }
  //   )
  //   return data
  // }

  // save user
  // const saveUser = async userdata => {

  //   console.log(userdata);
  //   console.log(userdata.email);
  //   console.log(userdata.displayName);


  //   const currentUser = {
  //     name: userdata?.displayName,
  //     name2:user?.displayName,
  //     email: userdata?.email,
  //     role: 'user',
  //     status: 'verified',
  //   }
  //   console.log(currentUser.name2);
  //   const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/user`, currentUser)
  //   return data
  // }


  // onAuthStateChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail }
      setUser(currentUser)

      const userinfo = {
        name: currentUser?.displayName,
        email: currentUser?.email,
        role: 'user',
        status: 'verified',
      }

      if (currentUser) {
        console.log(currentUser);


        axiosCommon.put(`${import.meta.env.VITE_API_URL}/user`, userinfo)
          .then(res => {
            console.log(res.data);
          })




        axiosCommon.post(`/jwt`, loggedUser)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
              setLoading(false)
            }
          })
      } else {
        localStorage.removeItem('access-token')
        setLoading(false)
      }



    })
    return () => {
      unSubscribe();
    }
  }, [axiosCommon, user])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.array,
}

export default AuthProvider
