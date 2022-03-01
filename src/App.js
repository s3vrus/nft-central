import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './styles/App.scss';

import Coins from './components/coins';
import Navbar from './components/navbar';
import Coin from './pages/coin';
import Footer from './components/footer';
import Profile from './pages/profile';


const App = () => {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=non-fungible-tokens-nft&order=market_cap_desc&page=1&sparkline=false'

  useEffect (() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins}/>} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />}/>
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
