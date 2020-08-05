import React, { useState } from "react";


function Searchbar(props){


const [term,setTerm]=useState('')


function changed(e){

	setTerm(e.target.value)

}

function submit(e){
	props.submitfunc(e,term)


}

	return(
		<form onSubmit={submit}>

		<input type='text' onChange={changed} />
		<input value='Search' type='submit'/>

		
		</form>

		);
}


export default Searchbar;