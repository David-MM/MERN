import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import AuthProvider from './auth/AuthProvider';
import Layout from './components/layouts/Layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </AuthProvider>
      </Router>
    </>  
  );
}

export default App;
