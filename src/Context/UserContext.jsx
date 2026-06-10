import { createContext, useContext, useState, useEffect } from "react";

export const UserStateContext = createContext({
  user: {},
  authenticated: false,
  loading: true,
  role: null,
  setUser: () => {},
  logout: () => {},
  setAuthenticated: () => {},
  setToken: () => {},
  setRole: () => {},
});

export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authenticated, _setAuthenticated] = useState(false);
  const [role, _setRole] = useState(null);

  useEffect(() => {
    const isAuth = window.localStorage.getItem('AUTHENTICATED') === 'true';
    const savedRole = window.localStorage.getItem('USER_ROLE') ?? null; // ✅ إلا ما كانش يرجع null مشي string "null"

    _setAuthenticated(isAuth);
    _setRole(savedRole);
    setLoading(false);
  }, []);

  const logout = () => {
    setUser({});
    _setAuthenticated(false);
    _setRole(null);
    window.localStorage.removeItem('ACCESS_TOKEN');
    window.localStorage.removeItem('USER_ROLE');
    window.localStorage.removeItem('AUTHENTICATED'); // ✅ removeItem بدل setItem('false') — أنظف
  };

  const setAuthenticated = (isAuthenticated) => {
    _setAuthenticated(isAuthenticated);
    window.localStorage.setItem('AUTHENTICATED', isAuthenticated);
  };

  const setToken = (token) => {
    window.localStorage.setItem('ACCESS_TOKEN', token);
  };

  const setRole = (newRole) => {
    _setRole(newRole);
    window.localStorage.setItem('USER_ROLE', newRole);
  };

  return (
    <UserStateContext.Provider value={{
      user,
      logout,
      setUser,
      authenticated,
      setAuthenticated,
      setToken,
      loading,
      role,
      setRole,
    }}>
      {children}
    </UserStateContext.Provider>
  );
}

export const useUserContext = () => useContext(UserStateContext);