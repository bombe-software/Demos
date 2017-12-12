//NPM packages
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Actions
import { signupUser } from "../actions";

//Components
import GenericForm from './generics/form';
import WaveBackground from './generics/wave_background';

/**
* @class SignUp
* @author Vicroni <drasa_tec@hotmail.com>
* @author Someone <none>
* @version  1.0 <10/12/17>
* @description: 
* El objetivo de la clase recibir datos para realigar un registro a la base de datos.
*/
class SignUp extends GenericForm {

  /**
   * Inicializa el state en donde se colocan
   * las clases activas de los avatares y 
   * el avatar seleccionado actual
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'jaiba',
      imgAvatar: ['selected', 'none', 'none', 'none']
    };
    this.updateJaiba = this.updateJaiba.bind(this);
    this.updateAnguila = this.updateAnguila.bind(this);
    this.updateChivo = this.updateChivo.bind(this);
    this.updateErizo = this.updateErizo.bind(this);
  }

  /**
  * Cambia el avatar actualmente seleccionado a Jaiba.jpg
  * @method updateJaiba
  * @const state.avatar Hace referencia al avatar actualmente seleccionado
  * @const state.imgAvatar Hace referencia a las clases(css) que tiene cada imagen
  */
  updateJaiba() {
    this.setState({
      avatar: "jaiba",
      imgAvatar: ['selected', 'none', 'none', 'none']
    })
  }

  /**
  * Cambia el avatar actualmente seleccionado a Anguila.jpg
  * @method updateAnguila
  * @const state.avatar Hace referencia al avatar actualmente seleccionado
  * @const state.imgAvatar Hace referencia a las clases(css) que tiene cada imagen
  */
  updateAnguila() {
    this.setState({
      avatar: "anguila",
      imgAvatar: ['none', 'selected', 'none', 'none']
    })
  }

  /**
  * Cambia el avatar actualmente seleccionado a Chivo.jpg
  * @method updateChivo
  * @const state.avatar Hace referencia al avatar actualmente seleccionado
  * @const state.imgAvatar Hace referencia a las clases(css) que tiene cada imagen
  */
  updateChivo() {
    this.setState({
      avatar: "chivo",
      imgAvatar: ['none', 'none', 'selected', 'none']
    })
  }

  /**
  * Cambia el avatar actualmente seleccionado a Erizo.jpg
  * @method updateErizo
  * @const state.avatar Hace referencia al avatar actualmente seleccionado
  * @const state.imgAvatar Hace referencia a las clases(css) que tiene cada imagen
  */
  updateErizo() {
    this.setState({
      avatar: "bussines",
      imgAvatar: ['none', 'none', 'none', 'selected']
    })
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
  * @const avatar Es el avatar seleccionado por el usuario
  * @const values Son los valores del formulario
  * @function signupUser:
  * Es una accion que comunica con la api y realiza
  * un registro de los datos del usuario, en ella se implementa
  * un sistema de firmas.
  */
  onSubmit(values) {
    let { avatar } = this.state;
    this.props.signupUser(values, avatar, request => {
      console.log(request);
      this.props.history.push("/confirm_email");
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
                <div className="box"> <h1 className="title is-3">Registro</h1><p>Ingrese la siguiente información</p><hr />
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="columns">

                      <div className="column">

                        <div className="level">
                          <div className="level-item">
                            <Field name="usuario" component={this.renderTextField} label="Nombre de usuario" />
                          </div>
                        </div>
                        <div className="level">
                          <div className="level-item">

                            <Field name="email" component={this.renderTextField} label="Correo Electrónico" />
                          </div>
                        </div>
                        <div className="level">
                          <div className="level-item">
                            <Field name="password" component={this.renderPasswordField} label="Cree una contraseña" />
                          </div>
                        </div>
                        <div className="level">
                          <div className="level-item">
                            <Field name="Rpassword" component={this.renderPasswordField} label="Repita su contraseña" />
                          </div>
                        </div>
                        <div className="level">
                          <div className="level-item">
                            <Field name="curp" component={this.renderTextField} label="Ingrese su curp" />
                          </div>
                        </div>
                      </div>

                      <div className="column">
                        <div>
                          <div>

                            <div className="level">
                              <div className="level-item">
                                <h2 className="is-size-5">Seleccione un avatar</h2>
                              </div>
                            </div>

                          </div><br />
                          <div className="level">
                            <div className="level-item"></div>
                            <div className="level-item has-text-centered">
                              <label>
                                <input type="radio" name="imagen" selected />
                                <img src="./assets/img/jaiba.svg" className={this.state.imgAvatar[0] + " image is-64x64"} width="100px" height="100px" onClick={this.updateJaiba} />
                              </label>
                            </div>

                            <div className="level-item has-text-centered">
                              <label>
                                <input type="radio" name="imagen" />
                                <img src="./assets/img/anguila.svg" className={this.state.imgAvatar[1] + " image is-64x64"} width="100px" height="100px" onClick={this.updateAnguila} />
                              </label>
                            </div>
                            <div className="level-item"></div>

                          </div>
                          <div className="level">

                            <div className="level-item"></div>
                            <div className="level-item has-text-centered">
                              <label>
                                <input type="radio" name="imagen" />
                                <img src="./assets/img/chivo.svg" className={this.state.imgAvatar[2] + " image is-64x64"} width="100px" height="100px" onClick={this.updateChivo} />
                              </label>
                            </div>

                            <div className="level-item has-text-centered">
                              <label>
                                <input type="radio" name="imagen" />
                                <img src="./assets/img/hedgehog.svg" className={this.state.imgAvatar[3] + " image is-64x64"} width="100px" height="100px" onClick={this.updateErizo} />
                              </label>
                            </div>
                            <div className="level-item"></div>

                          </div>
                          <br />
                        </div>
                      </div>

                    </div>
                    <br />
                    <div className="level">
                      <div className="level-item has-text-centered">
                        <button type="submit" className="button is-primary">
                          Registrarme
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
* @param values Son el resultado de los formualarios
*/
function validate(values) {
  const errors = {};

  if (!values.usuario) {
    errors.usuario = "Escriba su nombre de usuario";
  }
  if (values.usuario != undefined) {
    var ra = /^[a-z0-9]+$/i;
    if (!ra.test(values.usuario)) {
      errors.usuario = "Solo puede contener alfa numericos y sin espacios";
    }
  }
  if (!values.email) {
    errors.email = "Escriba su email";
  }
  if (!values.password) {
    errors.password = "Escriba su contraseña";
  }
  if (values.password != undefined) {
    var re = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{6,}$/;
    if (!re.test(values.password)) {
      errors.password = "Min. 6 caractéres, 1 mayuscula, 1 minuscula y sin espacios";
    }
  }

  if (!values.Rpassword) {
    errors.Rpassword = "Escriba su contraseña";
  }

  if (!values.curp) {
    errors.curp = "Escriba su curp";
  }

  if (values.curp != undefined) {
    var ri = /^([A-Z]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9A-Z]\d)$/i


    if (!ri.test(values.curp)) {

      errors.curp = "CURP invalido"
    }
  }


  if (values.password != values.Rpassword) {
    errors.Rpassword = "Asegurese que las contraseñas coincidan";
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Correo inválido'
  }
  return errors;
}


/**
* Conecta la clase con:
* @function validate
* @function signupUser
*/
export default reduxForm({
  validate,
  form: "SignUpForm"
})(connect(null, { signupUser })(SignUp));
