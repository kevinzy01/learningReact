import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from "./components/App"
import registerServiceWorker from './registerServiceWorker';

window.React = React 

render(<App />, document.getElementById('ratingStars'));


registerServiceWorker();
console.log(registerServiceWorker());
