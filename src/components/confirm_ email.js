import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import GenericForm from './generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { confirmEmail } from "../actions";
import WaveBackground from './generics/wave_background';

/**
* @class ConfirmEmail
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* El objetivo de la clase es recibir un codigo que el usuario va ingresar que previamente
se le fue enviado a su correo para autentificarlo y si lo es, activara su cuenta para tener
los servicios.
*/
class ConfirmEmail extends GenericForm{

/**
   * Inicializa el state en donde se desplegara el mensaje de error
   * en caso de que el codigo de activacion no concida con
   * la enviada.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
       mensaje: ''
    };
  }

/**
  * Recibe como parametros los valores al enviar
  * el formualario
  * @method onSubmit
  * @const values Son los valores del formulario
  * @function confirmEmail:
  * Es una accion que comunica con la api y realiza
  * una consulta para verificar si el codigo ingresado por el usuario
  * concide con el que esta en el sistema y asi, activar la cuenta.
  */
  onSubmit(values) {
    this.props.confirmEmail(values, response => {
      if(response.data.mensaje == "Todo bien"){
        this.props.history.push("/login");
      }else{
        this.setState({
          mensaje: "Clave no coincide"
        })
      }
    });
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
    const { handleSubmit } = this.props;
    return (
      <div>
        <section className="hero is-large">
          <div className="section">
            <div className="columns">
              <div className="column is-6-desktop is-8-tablet is-offset-3-desktop is-offset-2-tablet">
              <div className="box"><h1 className="title is-3">Inicio de sesión</h1><hr/>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <p>Te enviamos un correo electronico de {'info@bombesoftware.com'} con una clave, ingrésala para continuar</p>
                  
                  <div className="level">
                    <div className="level-item">
                    <Field name="email" component={this.renderTextField} label="Email:" />
                    </div>
                  </div>

                  <div className="level">
                    <div className="level-item">
                    <Field name="firma" component={this.renderTextField} label="Clave:" />
                    </div>
                  </div>

                  <div className="level">
                    <div className="level-item">
                  ¿No te llegó el correo? &nbsp;<a href="#">Reenviar</a><br /><br/>
                  </div></div>

                  <div className="level">
                  {this.state.mensaje}
                  <div className="level-item">
                  <button type="submit" className="button">
                    Ingresar
                  </button>
                  </div></div>
                </form>
              </div>
              </div>
            </div>
          </div>
        </section>
        <WaveBackground />
      </div>
    );
  }
}
/**
* Recibe como parametros los valores al enviar
* el formulario y valida los campos regresando 
* un error en caso de que esten incorrectos
* @method validate
* @param values Son el resultado de los formualarios
*/
function validate(values) {
  const errors = {};

    if(values.clave == undefined){
        errors.clave ="Ingrese la clave";
    }
  
  return errors;
}
/**
* Conecta la clase con:
* @function validate
* @function confirmEmail
*/
export default reduxForm({
  validate,
  form: "ConfirmEmailForm"
})(connect(null, { confirmEmail })(ConfirmEmail));
