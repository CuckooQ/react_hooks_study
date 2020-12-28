import { useRef, useState } from 'react';
import './App.css';

const useFullscreen = () => {
  const ref = useRef();
  const [value, setValue] = useState(false);
  const changeToFullScreen = () => {
    !value && ref.current.requestFullscreen();
    setValue(true);
  }
  const exitFullScreen = () => {
    value && document.exitFullscreen();
    setValue(false); 
  }

  return [ref, changeToFullScreen, exitFullScreen];
}

const App = () => {
  const [imgRef, changeToFullScreen, exitFullScreen] = useFullscreen();

  return (
    <div className="App">
      <img onClick={exitFullScreen} ref={imgRef} alt="" src="https://avatars3.githubusercontent.com/u/26422847?s=400&v=4"></img>
      <button onClick={changeToFullScreen}>Change to Fullscreen</button>
    </div>
  );
}

export default App;
