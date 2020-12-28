import { useEffect, useState } from 'react';
import './App.css';

const useScroll = () => {
  const [value, setValue] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setValue({x: window.scrollX, y: window.scrollY});
  }

  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return value.y;
}

const App = () => {
  const y = useScroll();
  
  return (
    <div className="App" style={{width: "100vw", height: "1000vh"}}>
      <h1 style={{position: "fixed", color: (y < 2000)? "black" : "orange"}}>Color</h1>
    </div>
  );
}

export default App;
