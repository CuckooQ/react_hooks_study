import { useEffect, useState } from 'react';
import './App.css';

const useTitle = (initValue) => {
  const [value, setValue] = useState(initValue);
  const setTitle = () => {
    const titleHtml = document.querySelector("title");
    titleHtml.innerText = value;
  }
  useEffect(setTitle, [value]);
  return [value,setValue];
}

const App = () => {
  const [title, setTitle] = useTitle("Loading...");
  setTimeout(() => setTitle("Home"), 5000);
  return (
    <div className="App">
      {title}
   </div>
  );
}

export default App;
