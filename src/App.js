import React, { useState } from "react";

import './App.css';
import Searchbar from './components/Searchbar.js';
import Item from './components/datalist.js';
import AddRow from './components/AddRow.js';


function App(props) {

  const [data,updateData]=useState(props.data)
 

  const [fdata,setfdata]=useState(data)
  const data1=data

 


	const list=fdata.map(item=>(



		<Item name={item.name}
			  country={item.country}
			  club={item.club}
		/>

		)

	)


  function filter(term){
    const fildata=data.filter(function(element){
      if (term){
      return(

      element.name.toLowerCase().startsWith(term.toLowerCase()) ||
      element.club.toLowerCase().startsWith(term.toLowerCase()) || 
      element.country.toLowerCase().startsWith(term.toLowerCase())

      )
    }
    else{
      return(true)
    }


    })
    setfdata(fildata)

  }

  function submitfunc(e,term){
    e.preventDefault()
    
    filter(term)

  }

  function rowadder(terms){
    data1.unshift(terms)
    updateData(data1)
    setfdata(data1)
    filter('')
    
  }


const th=Object.keys(data[0]).map(col=>(
<th class='data'>{col.toUpperCase()}</th>
      


  ))

  return (

  	<div class='main'>
    <Searchbar submitfunc={submitfunc}/><br/><br/><br/>
    <AddRow dats={data[0]} submit={rowadder}/><br/>
    <table class='datatable' >

    <div>
    <tr class='datarow'>
     {th}
    </tr>

    <hr size='2'/>
    </div>




    {list}
    </table>

    </div>
  );
    }



export default App;
