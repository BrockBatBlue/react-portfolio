import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Error404 from './Components/Error404';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route path="/" component={Error404} /> */}
      </Router>
      <Footer/>
    </>
  );
}

export default App;
