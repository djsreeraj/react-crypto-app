import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

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
          {listOfCoins.map( item => <h1>{item.name}</h1>)}
      </div>

    </div>
  );
}

export default App;
