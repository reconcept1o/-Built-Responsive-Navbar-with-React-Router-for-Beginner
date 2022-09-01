import  './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import {useState} from 'react';
import Menu from './components/Menu';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn'

function App() {
  const [clicked, isClicked] = useState(false)
  return (

 <Router>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/>:null}
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="contact-us" element={<ContactUs />} />
      <Route exact path="about-us" element={<AboutUs />}/>
      <Route exact path="sign-in" element={<SignIn />}/>

    </Routes>
    </Router>

  );
  
}

export default App;
