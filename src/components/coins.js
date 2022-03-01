import React from 'react';
import CoinItem from './coinitem';
import {Link} from 'react-router-dom';
import Coin from '../pages/coin';

const Coins = (props) => {
  return (
    <div className='container'>
        <h1 className='title'>NFT Coin Information</h1>
        <div>
            <div className='heading'>
                <p>Global Rank #</p>
                <p className='coin-name'>Coin</p>
                <p>Price (USD)</p>
                <p>24h</p>
                <p className='hide-mobile'>24h Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        <CoinItem coins={coins} />
                    </Link>
                )
            })}

        </div>
    </div>
  )
};

export default Coins