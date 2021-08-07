import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import React from "react";
//import Home from './pages/Home';
//import About from './pages/About';
//import Contact from './pages/Contact';
//import Forms from './Forms'

import {Switch, Route, Link} from "react-router-dom";

function App() {
  return (

    <div>
     <nav>
       <Link to="/About">About Page</Link>
      <Link to="/Contact">Contact Page</Link>
      <Link to="/Login">Log In Page</Link>
      <Link to="/Home">Home Page</Link>
      
      </nav>
   
     

     <Switch>
     <Route path="/About">
       <About/>
       </Route>
       <Route path="/Login">
       <Login/>
     </Route>
     <Route path="/Contact">
       <Contact/>
     </Route>
     <Route path="/Home">
       <Home/>
     </Route>
     </Switch>

    </div>
  )
}


export default App