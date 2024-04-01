import { createContext, useContext, useState } from "react";

// create context object
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // create values for context
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  return (
    // Wrap children with a Provider
    <AuthContext.Provider value={{ user, token, setUser, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Consume the Context
export const useAuth = () => {
  return useContext(AuthContext);
};
