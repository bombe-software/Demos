import React, { Component } from 'react';

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
  
  render(){
    return (
      <div className="ocean"><div className="wave"></div>
      <div className="wave"></div></div>
    )
  }
}

export default WaveBackground;
