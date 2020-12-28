import { useEffect, useState } from 'react';
import './App.css';

const useNetwork = () => {
  const [value, setValue] = useState(navigator.onLine);
  const handleChange = () => {
    setValue(navigator.onLine);
  }

  useEffect(()=>{
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  const status = value ? "online" : "offline";

  return status;
}

const App = () => {
  const status = useNetwork();
  return (
    <div className="App">
      {status}
    </div>
  );
}

export default App;
