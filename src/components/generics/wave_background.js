//NPM packages
import React, { Component } from 'react';
/**
* @class WaveBackground
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* Muestra el efecto de Wave de fondo en las mayoria de los modulos del sistema.
*/
class WaveBackground extends Component{

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
  * en base a la informacion anterior
  * @returns La cadena HTML que sera mostrada al usuario(background wave)
  * @method render
  */
  render(){
    return (
      <div className="ocean"><div className="wave"></div>
      <div className="wave"></div></div>
    )
  }
}

export default WaveBackground;
