//NPM packages
import React, { Component } from "react";

/**
* @class Administrador
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* El objetivo de la clase es ...
*/
class Administrador extends Component {
  /**
   * Permite acceder al método constructor de la clase principal
   * @constructor
   */
  constructor(props) {
    super(props);
  }

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
  * @returns La cadena HTML que sera mostrada al usuario
  * @method render
  */
  render() {
    return (
      <div>
        Administrador
      </div>
    )
  }
}

export default Administrador;
