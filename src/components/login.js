import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import GenericForm from './generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, load_user } from "../actions";
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import WaveBackground from './generics/wave_background';

class Login extends GenericForm {

  constructor(props) {
    super(props);
    this.state = {
       mensaje: ''
    };
  }

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

export default reduxForm({
  form: "LoginForm",
  validate
})(connect(mapStateToProps, { loginUser, load_user })(Login));
