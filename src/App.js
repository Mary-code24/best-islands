import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [places, setPlaces] = useState(0);
  const {id, name, description, image} = data[places];

  const previousPlace = () => {
    setPlaces((places => {
      places --;
      if(places < 0) {
        return data.length-1;
      }
      return places;
    }))
  }

  const nextPlace = () => {
    setPlaces((places => {
      places ++;
      if (places > data.length -1) {
        places = 0;
      }
      return places;
    }))
  }

  return(

    <div>
      <div className='container'>
      <h1>Best Islands to visit</h1>
      </div>

      <div className='container'>
<img src={image} width='500px' alt='places' />
      </div>

      <div className='container'>
<h2> {id} - {name}</h2>
      </div>

<div className='container'>
<p>{ description }</p>
</div>

<div className='btn container'>
<button onClick={previousPlace}>previous</button>
<button onClick={nextPlace}>next</button>

</div>

  </div>
  )
}

export default App;
