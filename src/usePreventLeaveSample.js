import { useEffect, useRef } from 'react';
import './App.css';

const usePreventLeave = () => {
  const beforeunload = event => {
    event.preventDefault();
    event.returnValue = "";
  }
  const protectLeave = () => {
    window.addEventListener("beforeunload", beforeunload);
  }
  const unprotectLeave = () => {
    window.removeEventListener("beforeunload", beforeunload);
  }

  const protectRef = useRef();
  const unprotectRef = useRef();

  useEffect(()=> {
    protectRef.current.addEventListener("click", protectLeave);
    unprotectRef.current.addEventListener("click", unprotectLeave);
    return ()=>{
      protectRef.current.removeEventListener("click", protectLeave);
      unprotectRef.current.removeEventListener("click", unprotectLeave);  
    }
  }, []);
  return [protectRef, unprotectRef];
}

const App = () => {
  const [protectRef, unprotectRef] = usePreventLeave();
  return (
    <div className="App">
      <button ref={protectRef}>Protect</button>
      <button ref={unprotectRef}>Unprotect</button>
    </div>
  );
}

export default App;
