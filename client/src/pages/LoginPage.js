import React from 'react'
import { useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function LoginPage() {

  const userCredential = {};

  const { login } = useAuth();

  const location = useLocation();

  return (
      <>
        <h1>LoginPage</h1>
        <button onClick={() => login(userCredential, location.state?.from.pathname || routes.projects) } >
            Iniciar Seccion
        </button>
        
      </>
  )
}
