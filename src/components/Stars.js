import logo from '../swl.png';
import '../App.css';
import List from '../List';
import { Select } from "@chakra-ui/react"
import React from 'react';
import Phone from "../movie";
import Characters from './Characters';
import Contact from './Contact';



function Stars() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Contact/> */}
       <Phone/>
    </div>
  );
}


export default Stars;


