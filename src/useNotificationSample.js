import { useEffect, useRef } from 'react';
import './App.css';

const useNotification = () => {
  const ref = useRef();
  const notice = () => {
    const title = "Notice";
    const options = {
      body: "It is notification sample."
    };
    new Notification(title, options);
  }
  const requestNotice = () => {
    if ("Notification" in window) {
      if( Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
          if(permission === "granted"){
            notice();
          }
        });
      } else {
        notice();
      }
    }
  }
  useEffect(()=>{
    ref.current.addEventListener("click", requestNotice);
    return () => ref.current.removeEventListener("click", requestNotice);
  }, []);

  return ref;
}

const App = () => {
  const btnRef = useNotification();

  return (
    <div className="App">
      <button ref={btnRef}>Notice!</button>
    </div>
  );
}

export default App;
