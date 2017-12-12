//NPM packages
import React, { Component } from 'react';

/**
* @class AnimatedBackground
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* Es el fondo animado que aparecen en la mayoria de los modulos.
*/
class AnimatedBackground extends Component{

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
  * @returns La cadena HTML que sera mostrada al usuario(animated backgroubd)
  * @method render
  */
  render(){
    return (
      <div className="ocean"><div className="animated-background"></div></div>
    )
  }
}

export default AnimatedBackground;
