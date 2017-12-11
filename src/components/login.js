import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import GenericForm from './generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, load_user } from "../actions";
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import WaveBackground from './generics/wave_background';


/**
* @class Login
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* El objetivo de la clase es permitir el acceso a difrentes servicios a 
todos aquellos usuarios que tenga un registro en el sistema.
*/
class Login extends GenericForm {
/**
   * Inicializa el state en donde se desplegara el mensaje de error
   * en caso de que el email y contrasena no concida o no exista el registro.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
       mensaje: ''
    };
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
  * Recibe como parametros los valores al enviar
  * el formualario
  * @method onSubmit
  * @const values Son los valores del formulario
  * @function loginUser:
  * Es una accion que comunica con la api y realiza
  * una autenticacion de redes para finalmente permitir el acceso si el registro
  * existe.
  */
  onSubmit(values) {
    this.props.loginUser(values, params => {
      this.props.load_user(params, data =>{
        if (data != 404) {
          this.props.history.push("/");
        }else{
          this.setState({
            mensaje: "Usuario o contraseña no coinciden"
          })
        }
      })
    });
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
              <div className="level">
                <div className="level-item">
                  <Field name="user" component={this.renderTextField} label="Email:" />
                </div>
              </div>
              <div className="level">
                <div className="level-item">
                  <Field name="password" component={this.renderPasswordField} label={"Password:"} />
                </div>
              </div>
              <div className="level">
                <div className="level-item">
                  ¿Olvidaste tu contraseña? &nbsp; <Link to="/recover_pass" > Recuperar </Link>
                </div>
              </div>
              <div className="level">
                <div className="level-item">
                  ¿No tienes una cuenta Demos? &nbsp; <Link to="/signin" > Registrate </Link>
                </div>
              </div>

            <div className="level">
              {this.state.mensaje}
              <div className="level-item has-text-centered">
                <button type="submit" className="button is-primary">
                  Ingresar
                </button>
              </div>
            </div>
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
* @param values Son el resultado de los formularios
*/
function validate(values) {
  const errors = {};

  if (!values.user) {
    errors.user = "Escribe tu email";
  }
  if (values.user && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user)) {
      errors.user = 'Correo inválido'
    }
  if (!values.password) {
    errors.password = "Escribe tu contraseña";
  }


  return errors;
}

function mapStateToProps(state) {
  return {
      user: state.user
  };
}
/**
* Conecta la clase con:
* @function validate
* @function loginUser
*/
export default reduxForm({
  form: "LoginForm",
  validate
})(connect(mapStateToProps, { loginUser, load_user })(Login));
