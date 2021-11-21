import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Service from "./Service";
import About from "./About";


const App = () => {
    return(
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>

          <Route exact path='/contact' element={<Contact/>}></Route>

          <Route exact path='/service' element={<Service/>}></Route>

          <Route exact path='/about' element={<About/>}></Route>

        </Routes>            
      
    );
};

export default App;