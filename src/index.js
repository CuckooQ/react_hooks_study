import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UseStateSample from './useStateSample';
import UseInputSample from './useInputSample';
import UseTabsSample from './useTabsSample';
import UseEffectSample from './useEffectSample';
import UseTitleSample from './useTitleSample';
import UseClickSample from './useClickSample';
import UseConfirmSample from './useConfirmSample';
import UsePreventLeaveSample from './usePreventLeaveSample';
import UsePageLeaveSample from './usePageLeaveSample';
import UseFadeInSample from './useFadeInSample';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UseFadeInSample />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
