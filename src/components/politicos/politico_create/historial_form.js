import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import GenericForm from './../../generics/form';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { DatePicker } from 'redux-form-material-ui';
import { insertHistorial } from "../../../actions";

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class HistorialForm extends GenericForm {

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
    this.props.insertHistorial(values, this.state.id_politico, this.props.user.id_usuario, response =>{
      console.log(response);
    });
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

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
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name="fecha" component={DatePicker} format={null} hintText="Seleccione la fecha"/>
            <Field name="titulo" component={this.renderTextField} label="Titulo del evento" />
            <Field name="descripcion" component={this.renderTextField} label="Descripcion del evento" />
            <button type="submit" className="button is-info">
              Submit
            </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

if(!values.fecha){
    errors.fecha = "Eliga una fecha";
  }

   if(!values.titulo){
    errors.titulo = "Escriba el título del evento";
  }
if(values.titulo != undefined){
    
    if(/^\s+|\s+$/.test(values.titulo)) {
  errors.titulo = "Escriba un nombre completo válido";
}

  }

   if(!values.descripcion){
    errors.descripcion = "Escriba la descripción del evento";
  }else
  if(/^\s+|\s+$/.test(values.descripcion)) {
  errors.descripcion = "Escriba una descripción válida";
}

  return errors;
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default reduxForm({
  form: 'HistorialForm',  
  validate
})(connect(mapStateToProps, { insertHistorial })(HistorialForm));
