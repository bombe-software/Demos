import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NeedLogin extends Component {
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

	render(){
        return (
            <div className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-centered is-size-2">
                            Para ingresar a este módulo, necesitas &nbsp;
                            <Link to="/login" style={{color: '#171717'}}>Iniciar sesión</Link>
                        </h1>
                        <br />
                        <h2 className="subtitle has-text-centered is-size-3 ">
                            ¿No tienes una cuenta? &nbsp; 
                            <Link to="/signup" style={{color: '#171717'}}>Regístrate</Link>
                        </h2>

                    </div>
                </div>
            </div>
        )
	}
}


export default NeedLogin;