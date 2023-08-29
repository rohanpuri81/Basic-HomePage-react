import React from 'react';
import './App.css';
import Nav from './components/nav';
import HeroSection from './components/Hero';

const App=function(){
    return(
       <div>
        <Nav />
        <HeroSection />
       </div>
    );
}

export default App;