import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'
import Logout from './Components/Logout/Logout'
import Info from './Components/ProductDetails/Info'


function Routeslayout() {
  return (
    <>
  <Router>
    <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/products/:id' element={<Info/>}/>
   </Routes>
   <Footer/>
  </Router>
  </>
  )
  
}

export default Routeslayout