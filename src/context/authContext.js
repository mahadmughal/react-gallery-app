import firebaseAuth from '../Handlers/auth';
import { createContext, useContext, useMemo, useState } from 'react';

const Context = createContext();

const { signIn, signOut } = firebaseAuth;

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = () => { signIn().then(setCurrentUser) };
  const logout = () => { signOut().then(() => setCurrentUser(null)) };

  const value = useMemo(() => {
    return { login, logout, currentUser };
  }, [login, logout, currentUser]);

  return <Context.Provider value={value}>{children}</Context.Provider>
};

export const useAuthContext = () => {
  return useContext(Context);
};

export default AuthProvider;