import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

    //let count = 0;

    const increment = () =>{
      //count+=1;
      setCount(count+1);
    };

    const decrement = () =>{
      //count-=1;
      setCount(count-1);
    };

  return (
    <div className='div'>
      <div className='div2'>

        <span className='title'>My counter</span>
        <p className='subTitle'>The count is {count}</p>
        <button className='button' onClick={decrement}>-</button>
        <button className='button' onClick={increment}>+</button>

      </div>
    </div>
  );
}

export default App;


