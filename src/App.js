import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { Coin } from './components/Coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
    (response) => setListOfCoins(response.data.coins)
    )
  }, [])
  
  return (
    <div className="App">
      <div className='cryptoHeader'>

      </div>
      <div className='cryptoDisplay'>
          {listOfCoins.map( coin => <Coin name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.icon} />)}
      </div>

    </div>
  );
}

export default App;
