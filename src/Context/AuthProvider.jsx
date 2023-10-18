import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Firebase/Firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Context API (Auth Context)
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // User state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registration functions
  const registerWithEmail = (email, password) => {
    setLoading(true);
    console.log("Function triggerd");
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login functions
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Signout function
  const signOutUser = () => {
    setLoading(true);
    signOut(auth);
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser Information = ", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // AuthContext Values
  const authContextValues = {
    user,
    loading,
    registerWithEmail,
    loginWithEmail,
    loginWithGithub,
    loginWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
