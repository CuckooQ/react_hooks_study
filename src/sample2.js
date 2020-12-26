import './App.css';
import { useState } from 'react';

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const changeValue = (event) => {
    const {
      target : {
        value
      }
    } = event;
    const willUpdate = typeof validator === "function" ? validator(value): false;
    willUpdate && setValue(value);
  };

  return [value, changeValue];
}

const App = () => {
  const validateMaxLen = value => value.length <= 10;
  const [name, changeName] = useInput("", validateMaxLen);
  return (
    <div className="App">
      <div>{name}</div>
      <input id="name" placeholder="Input your name." onChange={changeName}/>
    </div>
  );
}

export default App;
