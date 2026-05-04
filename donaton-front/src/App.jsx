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



function Test({video}) {
  return (<div>
    <iframe width="1431" height="805" src={video} title="Ego Renegade Boy ft. Kagamine Len" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>);
}
function Test2() {

  return (<div>
      <h2>Vendedores de masa de sopaipillas cuando llueve</h2>
      <video src='https://images-ext-1.discordapp.net/external/uEKGBBdfaxCCi-UmEgx5gw6og0FANixe4s-yQm1hn6A/https/media.tenor.com/Tl99VpWULkMAAAPo/gambling.mp4' loop="true" autoPlay="a"/>
  </div>);
}


function App() {
  return (
    <>
      <NavBar/>
        <div className='wrapper'>
          <Routes>
              <Route path="/" element={<LandingView/>} />
              <Route path="/needs" element={<NeedsView/>} />
              <Route path="/us" element={<Test2/>} />
              <Route path="/locations" element={<Test video="https://www.youtube.comz/embed/M7VSEZOQIl0" />} />
              <Route path="/login" element={<LoginView/>} />


          </Routes>
        </div>
      <Footer/>
    </>
  );
}
   
export default App;
