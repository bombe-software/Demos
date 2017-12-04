import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import GenericForm from './generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { confirmEmail } from "../actions";
import WaveBackground from './generics/wave_background';

class ConfirmEmail extends GenericForm{

  constructor(props) {
    super(props);
    this.state = {
       mensaje: ''
    };
  }

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

function validate(values) {
  const errors = {};

    if(values.clave == undefined){
        errors.clave ="Ingrese la clave";
    }
  
  return errors;
}

export default reduxForm({
  validate,
  form: "ConfirmEmailForm"
})(connect(null, { confirmEmail })(ConfirmEmail));
