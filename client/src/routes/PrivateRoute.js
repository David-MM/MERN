import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({ hasRole: role, children }) {
    // const user = null;
    // const user = {id: 1, name: 'Juan', roll: 'admin'};

    const { hasRole, isLogged } = useAuth();

    const location = useLocation();
    
    
    if (!isLogged())
        return <Navigate to={ routes.login } state={{from: location}} />;
    
    if (role && !hasRole(role)) return <Navigate to={routes.home} />;

    return children;
}
