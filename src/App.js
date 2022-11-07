import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

import Header from './Compo/Header';
import Home from './Compo/Home';
import Coins from './Compo/Coins';
import CoinDetails from './Compo/CoinDetails';
import Exchanges from './Compo/Exchanges';
import Footer from './Compo/Footer';
// /
// 
function App() {
  return (
    <>
    
   <Router>
      <Header/>
         <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/coins" element={<Coins/>}/>
       <Route path="/exchanges" element={<Exchanges/>}/>
       <Route path="/coin/:id" element={<CoinDetails/>}/>
       
        </Routes>
    <Footer/>
   </Router>
  
   </>
         
         
   
  );
}

export default App;
