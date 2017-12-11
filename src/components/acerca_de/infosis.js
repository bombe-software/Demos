import React, {Component} from 'react';

/**
* @class Infosis
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* El objetivo de la clase es brindar informacion al usuario acerca del equipo desarrollador del sistema.
*/
class Infosis extends Component{

  /**
  * Es una forma de capturar cualquier error en la clase 
  * y que este no crashe el programa, ayuda con la depuracion
  * de errores
  * @method componentDidCatch
  * @const info Es más informacion acerca del error
  * @const error Es el titulo del error
  */
  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }
	  
/**
  * Realiza el renderizado de la aplicacion
  * @returns La cadena HTML que sera mostrada al usuario
  * @method render
  */
	render(){
		return(
		<div> 
			<h2 className="titulo">Sobre nosotros</h2>
		</div>
		);
	}
}
	
export default Infosis;