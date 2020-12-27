import { useEffect, useRef } from 'react';
import './App.css';

const useConfirm = (message, callback, rejection) => {
  const ref = useRef();
  const action = () => {
    if(window.confirm(message)){
      callback();
    } else{
      rejection();
    }
  }

  useEffect(()=>{
    ref.current.addEventListener("click", action);
    return () => {
      ref.current.removeEventListener("click", action);
    };
  }, []);

  return ref;
}

const App = () => {
  const nameRef = useRef();
  const emailRef =useRef();
  const hoverToName = ()=> {nameRef.current.focus()};
  const hoverToEmail = () => {emailRef.current.focus()};
  const buttonRef = useConfirm("Are you sure?", hoverToName, hoverToEmail);
  return (
    <div className="App">
      <input ref={nameRef} type="text" placeholder="name" />
      <input ref={emailRef} type="text" placeholder="email" />
      <button ref={buttonRef}>Action</button>
    </div>
  );
}

export default App;
