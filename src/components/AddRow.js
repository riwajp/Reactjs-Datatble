import React, { useState } from "react";

function AddRow(props){


const [add_data_list,updateNewList]=useState({})

const add_data_list_ud=add_data_list

function change(e){
	const objprop=e.target.name
	if (add_data_list_ud[objprop]){
		add_data_list_ud[objprop]=e.target.value
	}
	else{
		
		add_data_list_ud[objprop]=e.target.value
	}
	updateNewList(add_data_list_ud)
}

const cols=Object.keys(props.dats)



const ui=cols.map(key=>(

	<input name={key} placeholder={key} onChange={change}/>

	))

function add(e){
	e.preventDefault()
	props.submit(add_data_list)
	updateNewList({})
}

return(
	<div>
	<form onSubmit={add}>
	{ui}
	<input type='submit' value='Add Row'/>
	</form>
	</div>



	)

}

export default AddRow;
