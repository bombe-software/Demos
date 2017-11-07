import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import GenericForm from './generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../actions";
import WaveBackground from './generics/wave_background';


class SignUp extends GenericForm {
  constructor(props) {
    super(props);
    this.state = {
       avatar: 'jaiba',
       imgAvatar: ['selected','none','none','none']
    };
    this.updateJaiba = this.updateJaiba.bind(this);
    this.updateAnguila = this.updateAnguila.bind(this);
    this.updateChivo = this.updateChivo.bind(this);
    this.updateErizo = this.updateErizo.bind(this);
  }

  updateJaiba(){
    this.setState({
      avatar: "jaiba",
      imgAvatar: ['selected','none','none','none']
     })
  }
  updateAnguila(){
    this.setState({
      avatar: "anguila",
      imgAvatar: ['none','selected','none','none']
     })
  }
  updateChivo(){
    this.setState({
      avatar: "chivo",
      imgAvatar: ['none','none','selected','none']
     })
  }
  updateErizo(){
    this.setState({
      avatar: "bussines",
      imgAvatar: ['none','none','none','selected']
     })
  }

  onSubmit(values) {
    let { avatar } =  this.state;
    this.props.signupUser(values, avatar ,request => {
      console.log(request);
      this.props.history.push("/confirm_email");
    });
  }

render() {
    const { handleSubmit } = this.props;
    return(
      <div>
      <section className="hero is-large">
        <div className="section">
          <div className="columns">
            <div className="column is-6-desktop is-8-tablet is-offset-3-desktop is-offset-2-tablet">
              <div className="box"> <h1 className="title is-3">Registro</h1><p>Ingrese la siguiente información</p><hr/>
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

                      </div><br/>
                      <div className="level">
                        <div className="level-item"></div>
                        <div className="level-item has-text-centered">
                          <label>
                            <input type="radio" name="imagen" selected/>
                            <img src="./assets/img/jaiba.svg" className={this.state.imgAvatar[0] + " image is-64x64"} width="100px" height="100px" onClick={this.updateJaiba}/>
                          </label>
                        </div>

                        <div className="level-item has-text-centered">
                          <label>
                            <input type="radio" name="imagen" />
                            <img src="./assets/img/anguila.svg" className={this.state.imgAvatar[1] + " image is-64x64"} width="100px" height="100px" onClick={this.updateAnguila}/>
                          </label>
                        </div>
                        <div className="level-item"></div>

                      </div>
                      <div className="level">

                        <div className="level-item"></div>
                        <div className="level-item has-text-centered">
                          <label>
                            <input type="radio" name="imagen" />
                            <img src="./assets/img/chivo.svg" className={this.state.imgAvatar[2] + " image is-64x64"} width="100px" height="100px" onClick={this.updateChivo}/>
                          </label>
                        </div>

                        <div className="level-item has-text-centered">
                          <label>
                            <input type="radio" name="imagen" />
                            <img src="./assets/img/hedgehog.svg" className={this.state.imgAvatar[3] + " image is-64x64"} width="100px" height="100px" onClick={this.updateErizo}/>
                          </label>
                        </div>
                        <div className="level-item"></div>

                      </div>
                      <br/>
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


function validate(values) {
  const errors = {};

  if (!values.usuario) {
    errors.usuario = "Escriba su nombre de usuario";
  }
   if(values.usuario != undefined){
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
  if(values.password != undefined){
    var re = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{6,}$/;
    if(!re.test(values.password)){
      errors.password ="Minimo 6 caracteres, una mayuscula y una minuscula y sin espacios";
    }
  }

  if (!values.Rpassword) {
    errors.Rpassword = "Escriba su contraseña";
  }

  if (!values.curp) {
    errors.curp = "Escriba su curp";
  }

 if(values.curp!= undefined){
    var ri=/^([A-Z]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9A-Z]\d)$/i


    if(!ri.test(values.curp)){

      errors.curp = "CURP invalido"
    }
  }


  if (values.password!=values.Rpassword) {
    errors.Rpassword = "Asegurese que las contraseñas coincidan";
  }
   if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Correo inválido'
    }
  return errors;
}

export default reduxForm({
  validate,
  form: "SignUpForm"
})(connect(null, { signupUser })(SignUp));
