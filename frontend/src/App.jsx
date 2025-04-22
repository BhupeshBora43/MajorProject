import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthWrapper from './Components/AuthWrapper.jsx';
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';



function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <AuthWrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
            </AuthWrapper>
          }
        />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
