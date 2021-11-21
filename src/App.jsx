import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from "./pages/Service";
import About from "./pages/About";
import Navbar from "./components/Navbar";


const App = () => {
    return(
      <>

        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>

          <Route exact path='/contact' element={<Contact/>}></Route>

          <Route exact path='/service' element={<Service/>}></Route>

          <Route exact path='/about' element={<About/>}></Route>

        </Routes>
      </>            

    );
};

export default App;