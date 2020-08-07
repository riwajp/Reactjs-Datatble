import React, { useState } from "react";

function Datatable(props){

	var th_elements=[]


	for (var i=1; i<=3; i ++){
		th_elements.push('Column '+i)
	}



	const th=th_elements.map(heading=>(

		<th>{heading}</th>

		))

	var trs

	if(props.data.length>=1){
	trs=props.data.map(element=>(
		<tr>
			<td>{element[0]}</td>
			<td>{element[1]}</td>
			<td>{element[2]}</td>
		</tr>


		))
	}
	else{
			trs=(
		<tr>
			<td colspan='3'><center>No results found</center></td>
		</tr>
		)
	}


	return(
		<table border='2' cellPadding='10' >

			<tr>{th}</tr>
			{trs}

		</table>
		)
}
export default Datatable;
