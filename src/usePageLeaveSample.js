import { useEffect } from 'react';
import './App.css';

const usePageLeave = action => {
  const beforeLeave = event => {
    const {
      clientY
    } = event;
    clientY <= 0 && action();
  }

  useEffect(()=>{
    document.addEventListener("mouseleave", beforeLeave);
    return () => document.removeEventListener("mouseleave", beforeLeave);
  }, []);
}

const App = () => {
  const beforeLeave = () => {
    window.confirm();
  }
  usePageLeave(beforeLeave);
  
  return (
    <div className="App">
      <div>Page Leave</div>
    </div>
  );
}

export default App;
