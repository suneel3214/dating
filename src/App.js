import './App.css';
import React,{createContext, useReducer} from 'react'
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
import {initialState , reducer} from './reducer/UserReducer';

export const UserContext = createContext();

function App() {
 
  const [state ,dispatch] = useReducer(reducer , initialState);

  return (
         <>
         <UserContext.Provider value={{state , dispatch}}>
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
         </UserContext.Provider>
         </>
  );
}

export default App;

