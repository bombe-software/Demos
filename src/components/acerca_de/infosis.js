import React, {Component} from 'react';

class Infosis extends Component{

	componentDidCatch(error, info) {
		console.log("Error: " + error);
		console.log("Info: " + info);
	  }
	  
	render(){
		return(
		<div> 
			<h2 className="titulo">Sobre nosotros</h2>
		</div>
		);
	}
}
	
export default Infosis;