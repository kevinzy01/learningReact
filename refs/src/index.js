import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddColorForm from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AddColorForm onNewColor={(title, color) => {
  console.log(`// TODO: Add new ${title} and ${color} to the list`)
  console.log(`// TODO: render UI with new color`);
}} />,
document.getElementById('root'));
registerServiceWorker();
