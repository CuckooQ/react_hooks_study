import './App.css';
import { useState } from 'react';

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const changeName = event => {
    const {
      target: {
        value
      }
    } = event;
    const valid = (typeof validator === "function") ? validator(value) : false;
    valid && setValue(value);
  };
  
  return [value, changeName];
}

const App = () => {
  const validateNameMaxLen = name => name.length <= 10;
  const [name, changeName] = useInput("", validateNameMaxLen);
  return (
    <div className="App">
      <div>{name}</div>
      <input id="nameInput" placeholder="" onChange={changeName}/>
    </div>
  );
}

export default App;