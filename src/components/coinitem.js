import React from 'react';

const CoinItem = (props) => {
  return (
  <div className='coin-row'>
      <p className='coin-ranks'>{props.coins.market_cap_rank}</p>
      <div className='img-symbol coin-names'>
          <img src={props.coins.image} alt=''/>
          <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p className='coin-prices'>${props.coins.current_price.toLocaleString()}</p>
      <p className='coin-hours'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile coin-volumes'>${props.coins.total_volume.toLocaleString()}</p>
      <p className='hide-mobile coin-caps'>${props.coins.market_cap.toLocaleString()}</p>

  </div>
  )
};

export default CoinItem;
