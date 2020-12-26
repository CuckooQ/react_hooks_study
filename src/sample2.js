import './App.css';
import { useState } from 'react';

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const changeValue = (event) => {
    const {
      target : {
        value
      }
    } = event;
    setValue(value);
  };

  return [value, changeValue];
}

const App = () => {
  const [name, changeName] = useInput("");
  return (
    <div className="App">
      <div>{name}</div>
      <input id="name" placeholder="Input your name." onChange={changeName}/>
    </div>
  );
}

export default App;
