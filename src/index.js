import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//import App from './App';
import reportWebVitals from './components/reportWebVitals';
import NavBar from './components/NavBar.js'
// import News from './components/News.js'
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import Features from './components/Features';
import Joinus from './components/Joinus';
import './styles/animation.css'
import Review from './components/Review';
import Comp from './components/Comp';
import Login from './components/Login'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import App from "./home/src/App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <NavBar />
    <Switch>
      <Route exact path='/'> <><Marquee /><Comp /></></Route>
      <Route path="/login" ><Login register={0}/></Route>
      <Route path="/register" ><Login register={1}/></Route>
      <Route path="/dashboard" ><App /></Route>
    </Switch>
    <Footer />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

