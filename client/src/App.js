import React from 'react';

//importing components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import ReviewPayment from './components/cart/ReviewPayment';

//importing libraries
import Box from '@mui/material/Box';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <DataProvider>
     <BrowserRouter>
      <Header/>
      <Box style={{marginTop : 54}}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/product/:id" element={<DetailView/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/review" element={<ReviewPayment/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
