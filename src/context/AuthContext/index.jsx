import { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const initializeUser = (user) => {
    if (user) {
      setCurrentUser({ ...user });
      setIsUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsUserLoggedIn(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isUserLoggedIn,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
};

export default AuthProvider;
