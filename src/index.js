import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar.js'
import News from './News.js'
import Marquee from './Marquee';
import Footer from './Footer';
import Features from './Features';
import ScrollAnimation from "react-animate-on-scroll";
import Joinus from './Joinus';
import './animation.css'
import Review from './Review';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <NavBar/>
    <Marquee/>
    <Features/>
    {/* rubberBand swing tada  */}
    
    <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight Fade' duration={1}>
    <News/>
    </ScrollAnimation>
    
    <ScrollAnimation animateIn='bounceInUp' animateOut='bounceOutUp' duration={1}>
    <Review/>
    </ScrollAnimation>
    
    <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={1}>
    <Joinus/>
    </ScrollAnimation>
    
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

