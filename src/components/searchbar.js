import React, { useState } from "react";

function Searchbar(props){


	function search(e){
		e.preventDefault()
		props.searchfunc(e.target.value)
	}


	const bar=(
		<input type='text' onChange={search}/>

		)

	return(
		<div>
			{bar}
		</div>

		)
}

export default Searchbar;