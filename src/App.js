import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './Pages/PlaceOrder';
import Footer from './Pages/Footer';
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup';
function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <> </>}
      <div>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>  
      </Routes>
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
