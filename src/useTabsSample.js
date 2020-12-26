import './App.css';
import { useState } from 'react';

const sections = [
  {
    tab: "Section1",
    content: "It is  the content of the Section 1." 
  },
  {
    tab: "Section2",
    content: "It is  the content of the Section 2." 
  },
  {
    tab: "Section3",
    content: "It is  the content of the Section 3." 
  }
];

const useTabs = (initValue, validator, values) => {
  const [value, setValue] = useState(initValue);
  
  if (!values || !Array.isArray(values)) {
    return;
  }
  
  const clickTab = (tabNum) => {
    const valid = typeof validator === "function" ? validator(tabNum): false;
    valid && setValue(tabNum);
  }
  
  return [values[value], clickTab];
}

const App = () => {
  const validateTab = tabNum => tabNum < sections.length && tabNum >= 0;
  const [selectedSection, clickTab] = useTabs(0, validateTab, sections);
  
  return (
    <div className="App">
      {
        sections.map((section, i) => (
          <button id = {"tab" + i} onClick={()=>{clickTab(i)}}>{section.tab}</button>
        ))
      }
      <div>{selectedSection.content}</div>
   </div>
  );
}

export default App;
