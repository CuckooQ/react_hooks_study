import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const initValue = 0;
  const [value, setValue] = useState(initValue);
  const [noticeText, setNoticeText] = useState("");
  const setNotice = () => (value !== initValue) && setNoticeText("The value is changed: " + value);
  useEffect(setNotice, [value]);
 
  return (
    <div className="App">
      <div>{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Change</button>
      <div>{noticeText}</div>
   </div>
  );
}

export default App;
