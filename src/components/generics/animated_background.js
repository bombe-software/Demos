import React, { Component } from 'react';

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
  
  render(){
    return (
      <div className="ocean"><div className="animated-background"></div></div>
    )
  }
}

export default AnimatedBackground;
