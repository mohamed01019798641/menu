import Navbar from "./componets/navbar/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./componets/footer/Footer";
import { useState } from "react";
import LoginPop from "./componets/Login/LoginPop";
const App = () => {
  const [showlogin,setShowlogin]=useState(false);

  return (
    <>
    {showlogin?<LoginPop setShowlogin={setShowlogin}/>:<></>}
    <div className="app">
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
    
  )
}

export default App
