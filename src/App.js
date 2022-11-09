import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { Coin } from './components/Coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
    (response) => setListOfCoins(response.data.coins)
    )
  }, [])

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchKey.toLowerCase())
  })
  
  return (
    <div className="App">
      <div className='cryptoHeader'>
          <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder="Bitcoin.." value={searchKey} />
      </div>
      <div className='cryptoDisplay'>
          {filteredCoins.map( coin => <Coin name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.icon} />)}
      </div>

    </div>
  );
}

export default App;
