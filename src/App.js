import './App.css';
import React,{useState} from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from './components/HomeComponent/Index';
import Navbar from './layout/HeaderComponent/Navbar';
import Footer from './layout/FooterComponent/Footer';
import Login from './components/LoginComponent/Login';
import Register from './components/RegisterComponent/Register';
import TopButton from './components/TopButton';
import Contact from './components/ContactComponent/Contact';
import About from './components/AboutComponent/About';
import Navigation from './layout/Navigation/Navbar';
import Profile from './components/ProfileComponent/Profile';


function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
         <Router>
           <Navbar />
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login"><Login /></Route>
              <Route exact path="/register"><Register /></Route>
              <Route exact path="/contact"><Contact /></Route>
              <Route exact path="/about"><About /></Route>
              <Route exact path="/add_new_profile"><Profile /></Route>
            </Switch>
            <TopButton/>
            <Footer/>
         </Router>
  );
}

export default App;

