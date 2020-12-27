import { useRef, useEffect } from 'react';
import './App.css';

const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.addEventListener("click", onClick);
    return ()=>{ 
      ref.current.removeEventListner("click", onClick);
    };
  }, []);
  return ref;
}

const App = () => {
  const inputRef = useRef();
  const onClick = () => {inputRef.current.focus()};
  const buttonRef = useClick(onClick);
  return (
    <div className="App">
      <input ref={inputRef} placeholder="name"/>
      <button ref={buttonRef}>Btn</button>
    </div>
  );
}

export default App;
