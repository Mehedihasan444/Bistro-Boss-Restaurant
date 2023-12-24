import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../src/Firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../src/Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("current User", currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
        .then((res) => {
          // console.log("from un",res.data)
          if (res.data) {
            localStorage.setItem('access-token', res.data);
          }
        });
      } else {
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    updateUserProfile,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
