import {createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();


export default function AuthProvider({children}) {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (userCredential, fromLocation) => {
      setUser({id: 1, name: 'Juan', roll: 'admin'});
      navigate(fromLocation, {replace: true});
    }

    const logout = () => setUser(null);

    const isLogged = () => !!user;

    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
    }
    return (
      <AuthContext.Provider value={contextValue} >
        {children}
      </AuthContext.Provider>
    )
}

