import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var data=[

['Messi','Argentina','Barcelona F.C'],
['Ronaldo','Portugal','Juventus'],
['Neymar','Brazil','PSG'],
['Mbappe','France','PSG'],
['Ronaldo','Portugal','Juventus']

]

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
