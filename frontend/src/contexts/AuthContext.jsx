import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user')
    if(data){
      setUser(JSON.parse(data))
    } 
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuth };