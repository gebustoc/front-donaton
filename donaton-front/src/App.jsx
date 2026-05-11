import { useState } from 'react'
import { Routes, Route, Router } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NeedsView from './view/NeedsView';
import LandingView from './view/LandingView';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import useLoggedInViewModel from './viewmodel/useLoggedInViewModel';
import { Spinner } from 'react-bootstrap';
import LogoutView from './view/LogoutView';




function App() {
  const LoginViewModel = useLoggedInViewModel()

  return (
    <>
      <NavBar loginviewmodel={LoginViewModel}/>
        <div className='wrapper'>
          <Routes>
              <Route path="/" element={<LandingView/>} />
              <Route path="/needs" element={<NeedsView loginviewmodel={LoginViewModel} />} />
              <Route path="/login" element={<LoginView userviewmodel={LoginViewModel}/>} />
              <Route path="/register" element={<RegisterView userviewmodel={LoginViewModel}/>} />
              <Route path="/logout" element={<LogoutView loginviewmodel={LoginViewModel}/>} />
              
          </Routes>
        </div>
      <Footer/>
    </>
  );
}
   
export default App;
