import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Summary from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Summary title="Peanut butter and jelly"
          ingredients= { ["Peanut Butter", "Jelly", "Bread"].length }
          steps={["Spread peanut butter and jelly between bread"].length}
   />,
   document.getElementById('root')
 );
registerServiceWorker();
