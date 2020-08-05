import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const data=[


	{name:'Messi',club:'Barcelona F.C',country:'Argentina'},
	{name:'Cristiano',club:'Juventus',country:'Portugal'},
	{name:'Neymar',club:'PSG',country:'Brazil'},
	{name:'Mbappe',club:'PSG',country:'Fance'},
	{name:'Rashford',club:'Manchester United',country:'England'},
	{name:'Pogba',club:'Manchester United',country:'England'},
	{name:'Aguero',club:'Manchester City',country:'Argentina'}

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
