import { useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
    (response) => console.log(response)
    )
  }, [])
  
  return (
    <div className="App">
      <div className='cryptoHeader'>

      </div>
      <div className='cryptoDisplay'>

      </div>

    </div>
  );
}

export default App;
