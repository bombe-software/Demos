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

import AnimatedBackground from '../../generics/animated_background';


/**
* @class HistorialForm
* @author HGWells07 <carlitose07@gmail.com>
* @version  1.0 <11/12/17>
* @description:
* El objetivo de la clase es la creación de un formulario exclusivo para
* el registro de enventos en el histrial de un político
*/
class HistorialForm extends GenericForm {

  /**
   * Inicializa el state en donde se desplegara el mensaje de error
   * en caso de que el email y contrasena no concida o no exista el registro.
   * De igual forma tiene la información del político del cual se está
   * editando el historial así como de un booleano que indica si el aviso
   * de aprobación se encuentra abierto o cerrado.
   * @constructor
   */
  constructor(props) {
    super(props);
    let { id } = this.props.match.params;
    this.state = {
      mensaje: '',
      id_politico: id,
      open: false
    };
  }

  /**
  * Controla el evento onSubmit del formulario de registro de historial y
  * hace log de la respuesta en consola.
  * @method onSubmit
  * @const values Son los datos enviados desde la forma de registro
  * Es una acción que comunica con la API, donde se envian los datos
  * para su registro.
  */
  onSubmit(values) {
    this.handleOpen();
    this.props.insertHistorial(values, this.state.id_politico, this.props.user.id_usuario, response =>{
      console.log(response);
    });
  }

  /**
  * Modifica el estado del aviso como abierto
  * @method handleOpen
  */
  handleOpen = () => {
    this.setState({open: true});
  };

  /**
  * Modifica el estado del aviso como cerrado
  * @method handleClose
  */
  handleClose = () => {
    this.setState({open: false});
  };

  /**
  * Es una forma de capturar cualquier error en la clase
  * y que este no detenga la ejecución del programa. Ayuda
  * con la depuracion de errores
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
   * @returns La cadena de etiquetado HTML que sera mostrada al usuario
   * @method render
   */
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
          title="El evento ahora está en espera de aprobación"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Espera la aprobación de un moderador de tu propuesta del evento
        </Dialog>
        <section className="hero is-large">
          <div className="section">
            <div className="columns">
              <div className="column is-6-desktop is-8-tablet is-offset-3-desktop is-offset-2-tablet">
                <div className="box">
                  <div className="has-text-centered"><h1 className="title is-3">Registrar evento</h1></div>
                  <hr />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="level">
          <div className="level-item">
            <Field name="fecha" component={DatePicker} format={null} hintText="Seleccione la fecha"/>
            </div></div>
            <div className="level">
              <div className="level-item">
            <Field name="titulo" component={this.renderTextField} label="Titulo del evento" />
            </div></div>
            <div className="level">
              <div className="level-item">
            <Field name="descripcion" component={this.renderTextField} label="Descripcion del evento" />
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
        </div></div></div></div></section><AnimatedBackground />
      </div>
    );
  }
}

/**
* Recibe como parametros los valores al enviar
* el formulario y valida los campos regresando
* un error en caso de que esten incorrectos.
* @method validate
* @param values Son los valores ingresados a los formularios
*/
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
  errors.titulo = "Escriba un titulo válido";
}

  }

   if(!values.descripcion){
    errors.descripcion = "Escriba la descripción del evento";
  }else
  if(/^\s+|\s+$/.test(values.descripcion)) {
  errors.descripcion = "Escriba una descripción válida";
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

/**
* Realiza una copia del estado actual de la aplicación y lo distribuye
* a la propiedad props del componente.
* @function mapStateToProps es la sobreescritura de la función.
* @param state Es el estado actual de la aplicación en general (Redux)
*/
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

/**
* Conecta la clase con:
* @function validate
* @function insertHistorial
*/
export default reduxForm({
  form: 'HistorialForm',
  validate
})(connect(mapStateToProps, { insertHistorial })(HistorialForm));
