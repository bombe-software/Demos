import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import GenericForm from './generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { recoverPass } from "../actions";
import WaveBackground from './generics/wave_background';


/**
* @class SignUp
* @author Vicroni <drasa_tec@hotmail.com>
* @author Someone <none>
* @version  1.0 <10/12/17>
* @description: 
* El objetivo de la clase es  
*/
class RecoverPass extends GenericForm{
  onSubmit(values) {
    this.props.recoverPass(values, () => {
      console.log("callback recoverPass");
      this.props.history.push("/login");
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

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
      <section className="hero is-large">
        <div className="section">
          <div className="columns">
            <div className="column is-6-desktop is-8-tablet is-offset-3-desktop is-offset-2-tablet">
            
                <div className="box">

                <h1 className="title is-3">Recuperar contraseña</h1><hr/>
                <span>Ingrese el correo electronico registrado en su cuenta de Demos</span>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <div className="level">
                  <div className="level-item">
                  <Field name="email" component={this.renderPasswordField} label="Direccion de correo electrónico:" />
                  </div>
                  </div>
                  <div className="level">
                  <div className="level-item">
                  <button type="submit" className="button is-primary">
                    Cambiar
                  </button>
                  </div>
                  </div>
                </form>
                <br/>
                <p className="is-size-7">Para recuperar el acceso a su cuenta, le enviaremos una contraseña
                generada por el sistema a su correo usela para acceder desde el login,
                recuerde que lo más importante para nosotros es su seguridad, si desea
                cambiar su contraseña por una más amigable, recuerde que puede editarla
                en  la seccion de "Configuracion de la cuenta"</p>
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

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Escriba el correo electrónico";
  }
   if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Correo inválido'
    }
  if (!values.NPassword) {
    errors.NPassword = "Escriba la nueva contraseña";
  }
  if (!values.RPassword) {
    errors.RPassword = "Escriba la nueva contraseña";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "RecoverPass"
})(connect(null, { recoverPass })(RecoverPass));
