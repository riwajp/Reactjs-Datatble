import React, { useState } from "react";
import Datatable from './components/datatable.js';
import Searchbar from './components/searchbar.js';




function App(props) {
var term=''
const [data,updateData]=useState(props.data)
var data_new=data
const [display_data,update_display_data]=useState(data)


function finalsearch(searchterm){
  if(searchterm!==''){
    term=searchterm
  }
  else{
    term=''
  }
const filtered_data=data.filter(element=>{
  if(term!==''){
      return(
      element[0].toLowerCase().startsWith(term.toLowerCase()) ||
      element[1].toLowerCase().startsWith(term.toLowerCase()) || 
      element[2].toLowerCase().startsWith(term.toLowerCase())
      )
  }
  else{
    return true
  }

  })

update_display_data(filtered_data)


}




  return (

<div>
<Searchbar searchfunc={finalsearch}/>
<Datatable data={display_data}/><br/>
</div>

)
    }



export default App;
