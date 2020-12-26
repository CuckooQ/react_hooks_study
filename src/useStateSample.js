import './App.css';
import { useState } from 'react';

const App = () => {
  const [item, setItem] = useState(0);
  const increase = () => {
    setItem(item + 1);
  }
  const decrease = () => {
    setItem(item - 1);
  }
  return (
    <div className="App">
      <div>{item}</div>
      <button id= "increase" onClick={increase}>+</button>
      <button id= "decrease" onClick={decrease}>-</button>
    </div>
  );
}

export default App;
