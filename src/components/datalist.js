import React, { useState } from "react";
import '../App.css';

function Item(props){
	return(
		<div>
		<tr class='datarow'>

			<td class='data'>{props.name}</td>
			<td class='data'>{props.club}</td>
			<td class='data'>{props.country}</td>

		</tr>
		<hr size='2'/>
		</div>
		)
}

export default Item;
