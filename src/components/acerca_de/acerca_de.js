//NPM packages
import React, {Component} from 'react';
//Components
import Ayuda from './ayuda.js';
import Infosis from './infosis.js';

/**
* @class AcercaDe
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* El objetivo de la clase es funcionar como interfaz para mostrar el modulo ayuda.js y mostrar informacion del
* sistema
*/
class AcercaDe extends Component{

/**
   * Inicializa el state en donde se guarda item seleccionado por el usuario
   * @constructor
   */
 constructor(props) {
    super(props);
    this.state = { type: 'infosis'};
    this.updateInfosis = this.updateInfosis.bind(this);
    this.updateAyuda = this.updateAyuda.bind(this);
    this.update = this.update.bind(this);
  }
/**
  * Realiza el renderizado del componente Infosis
  * @returns El componente Infosis que sera mostrada al usuario
  * @method renderInfosis
  */
  renderInfosis() {
    return (
        <Infosis />
    );
  }
/**
  * Realiza el renderizado del componente Ayuda
  * @returns El componente Ayuda que sera mostrada al usuario
  * @method renderAyuda
  */
  renderAyuda() {
    return (
      <div>
           <Ayuda />
      </div>
    );
  }

/**
  * Cambia el modulo a Infosis que despliegua informacion de los desarrolladores del sistema.
  * @method updateInfosis
  */
  updateInfosis() {
    this.setState({ type: 'infosis' });
  }
  /**
  * Cambia el modulo a Ayuda que despliega informacion del sistema.
  * @method updateAyuda
  */
  updateAyuda() {
    this.setState({ type: 'ayuda' });
  }

/**
  * Dependiendo de la opcion seleccionada, ejecutara el update correspondiente para renderizar 
  * el nuevo modulo.
  * @method update
  * @const type Guarda el valor de la opcion(item) seleccionada 
  */
  update() {
    let type = this.state.type;
    if (type == "infosis") {
      return (
        <div>
          {this.renderInfosis()}
        </div>
      );
    } else if (type == "ayuda") {
      return (
        <div>
          {this.renderAyuda()}
        </div>
      );
    }
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
      <div className="section">
        <div className="columns is-tablet">
          <div className="column is-8-widescreen is-10-desktop is-10-tablet is-10-mobile is-offset-1-mobile is-offset-1-tablet is-offset-1-desktop is-offset-2-widescreen">
              <h1 className="is-size-2">Ayuda</h1>
              <hr />
              <Ayuda />
          </div>
        </div>
        <div className="level"><br /><br /></div>
      </div>
    );
  }
}

export default AcercaDe;
