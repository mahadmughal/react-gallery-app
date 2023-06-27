import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './context/firebaseContext';
import AuthProvider from './context/authContext';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import SingleCard from './components/SingleCard';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthContext } from './context/authContext';

const AppRoutes = () => {
  const { currentUser } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/images/:id" element={<SingleCard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />}/>
      { currentUser && <Route path='/stocks' element={<Stocks />} /> }
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
