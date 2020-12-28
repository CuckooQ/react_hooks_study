import { useEffect, useRef, useState } from 'react';
import './App.css';

const fadeInBtnText = "Fade In!";
const fadeOutBtnText = "Fade Out!";

const useFadeIn = (duration = 1, delay = 0, btnText) => {
  const ref = useRef();
  const { current } = ref;
  useEffect(() => {
    if (current) {
      if (btnText === fadeOutBtnText) {
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      } else{
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 0;
      }
    }
  }, [btnText]);

  return {ref, style: {opacity: 0}};
}

const useClick = () => {
  const ref = useRef();
  const [btnText, setBtnText] = useState(fadeInBtnText);
  const change = () => {
    const updatedText = btnText === fadeInBtnText ? fadeOutBtnText: fadeInBtnText;
    setBtnText(updatedText);
  }
  useEffect(()=>{
    ref.current.addEventListener("click", change);
    return () => ref.current.removeEventListener("click", change);
  });

  return [ref, btnText];
}

const App = () => {
  const [btnRef, btnText] = useClick();
  const h1Ref = useFadeIn(1, 2, btnText);
  const p1Ref = useFadeIn(5, 5, btnText);
  return (
    <div className="App">
      <button ref={btnRef}>{btnText}</button>
      <h1 {...h1Ref}>Fade In</h1>
      <p {...p1Ref}>Fade .... In</p>
    </div>
  );
}

export default App;
