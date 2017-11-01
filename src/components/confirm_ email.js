import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import GenericForm from './generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { confirmEmail } from "../actions";
import WaveBackground from './generics/wave_background';

class ConfirmEmail extends GenericForm{
  onSubmit(values) {
    this.props.confirmEmail(values, () => {
      console.log("callback confirmEmail");
      his.props.history.push("/login");
    });
  }

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
                    <Field name="clave" component={this.renderPasswordField} label="Clave:" />
                    </div>
                  </div>

                  <div className="level">
                    <div className="level-item">
                  ¿No te llegó el correo? &nbsp;<a href="#">Reenviar</a><br /><br/>
                  </div></div>

                  <div className="level">
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

function validate(values) {
  const errors = {};

  
    var re = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{4}$/;
    if(!re.test(values.clave)){
      errors.clave ="Clave inválda";
    }
  
  return errors;
}

export default reduxForm({
  validate,
  form: "ConfirmEmailForm"
})(connect(null, { confirmEmail })(ConfirmEmail));
