import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import GenericForm from './../../generics/form';
import { fetchTipoPropuesta, insertPropuesta } from "../../../actions";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { DatePicker } from 'redux-form-material-ui';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import AnimatedBackground from '../../generics/animated_background';


class PropuestasForm extends GenericForm {

  constructor(props) {
    super(props);
    let { id } = this.props.match.params;
    this.state = {
      mensaje: '',
      id_politico: id,
      open: false
    };
  }

  onSubmit(values) {
    this.handleOpen();
    this.props.insertPropuesta(values, this.state.id_politico, this.props.user.id_usuario, response => {
      console.log(response);
    });
  }

  componentDidMount() {
    this.props.fetchTipoPropuesta();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderCategorias(categorias) {
    return _.map(categorias, categoria => {
      return (
        <MenuItem value={categoria.id_categoria_propuesta} primaryText={categoria.categoria} key={categoria.id_categoria_propuesta} />
      );
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
    const { handleSubmit, pristine, reset, submitting } = this.props;

    //Cambiar por consulta a la BD
    let categorias = this.props.tipo_propuesta;

    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          title="La propuesta ahora está en espera de aprobación"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Espera la aprobación de un moderador de tu propuesta de propuesta política
        </Dialog>
        <section className="hero is-large">
          <div className="section">
            <div className="columns">
              <div className="column is-6-desktop is-8-tablet is-offset-3-desktop is-offset-2-tablet">
                <div className="box">
                  <div className="has-text-centered"><h1 className="title is-3">Crear propuesta</h1></div>
                  <hr />
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    <div className="level">
                      <div className="level-item">
                        <Field name="nombre" component={this.renderTextField} label="Nombre de la propuesta" />
                      </div>
                    </div>
                    <div className="level">
                      <div className="level-item">
                    <Field name="descripcion" component={this.renderTextField} label="Descripcion de la propuesta" />
                    </div></div>
                    <div className="level">
                      <div className="level-item">
                    <Field name="categoria" component={this.renderSelectField} label="Selecciona un categoria">
                      {this.renderCategorias(categorias)}
                    </Field>
                    </div></div>
                    <div className="level">
                      <div className="level-item">
                    <Field name="link" component={this.renderTextField} label="Link" />
                    </div></div>

                    <div className="level">
                      <div className="level-item">
                    <button type="submit" className="button is-info">
                      Submit
                    </button>
                    </div></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AnimatedBackground />
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = "Escriba el nombre de la propuesta";
  } else if (/^\s+|\s+$/.test(values.nombre)) {
    errors.nombre = "Escriba una propuesta válida";
  }

  if (!values.descripcion) {
    errors.descripcion = "Escriba la descripción";
  } else if (/^\s+|\s+$/.test(values.descripcion)) {
    errors.descripcion = "Escriba descripción válida";

  }
  if (!values.categoria) {
    errors.categoria = "Escriba la categoría";
  }
  if(!values.link){
errors.link = "Escriba el link de referenica";

}else  if(values.link != undefined){
    var re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    if(/^\s+|\s+$/.test(values.link)) {
  errors.link = "Link invalido";
}else
    if(!re.test(values.link)){
      errors.link ="Link invalido";
    }
  }
  
  return errors;
}

function mapStateToProps(state) {
  return {
    user: state.user,
    tipo_propuesta: state.politico.tipo_propuesta
  };
}

export default reduxForm({
  form: 'PropuestasForm',
  validate
})(connect(mapStateToProps, { fetchTipoPropuesta, insertPropuesta })(PropuestasForm));
