import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import GenericForm from '../../generics/form';
import { fetchEstados,  fetchPartidos } from "../../../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { DatePicker } from 'redux-form-material-ui';
import { insertPolitico } from "../../../actions";

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import WaveBackground from '../../generics/wave_background';
import AnimatedBackground from '../../generics/animated_background';

import { RadioButtonGroup } from 'redux-form-material-ui'



class PoliticoForm extends GenericForm {

  constructor(props) {
    super(props);
    this.state = {
      mensaje: '',
      regionSelected: 'none',
      open: false
    };
    this.renderRegionExist = this.renderRegionExist.bind(this);
  }

  componentDidMount() {
    this.props.fetchEstados();
    this.props.fetchPartidos();
  }

  onSubmit(values) {
    this.handleOpen();
    this.props.insertPolitico(values, this.props.user.id_usuario ,response =>{
      console.log(response);
    });
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  renderPartidos(partidos) {
    return _.map(partidos, partido => {
      return (
        <MenuItem value={partido.id_partido} primaryText={partido.partido} key={partido.id_partido} />
      );
    });
  }
  setSelectedRegion(region) {
    region = _.values(region);
    region.splice(region.length - 1, 1);
    let request = region.join("");
    this.setState({
      regionSelected: request
    })
  }

  renderEstados(estados, region) {
    estados = _.mapKeys(estados, function (value, key) {
      return key;
    });
    if (region != undefined) {
      return _.map(estados[region], mini_item => {
        return (
          <MenuItem value={mini_item.id} primaryText={mini_item.nombre} key={mini_item.id} />
        )
      });
    }
  }

  renderRegiones(estados) {
    return _.map(estados, estado => {
      return (
        <MenuItem value={estado[0].zona} primaryText={estado[0].zona} key={estado[0].zona} />
      );
    });
  }

  renderRegionExist(estados){
    if(this.state.regionSelected != "none")
    return (
      <Field name="estado" component={this.renderSelectField} label="Selecciona un estado">
        {this.renderEstados(estados, this.state.regionSelected)}
      </Field>
    );
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
    let estados = _.groupBy(_.values(this.props.estados), 'zona');

    //Cambiar por consulta a la BD
    let {partidos} = this.props;

    const actions = [
      <FlatButton
        label="Aceptar"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleClose}
      />
    ];

    return (
      <div><section className="hero is-large">
        <Dialog
          title="El político ahora está en espera de aprobación"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Espera la aprobación de un moderador de tu propuesta de político
        </Dialog>

      <div className="section">
      <div className="columns">
        <div className="column is-6-desktop is-8-tablet is-offset-3-desktop is-offset-2-tablet">
        <div className="box"><div className="has-text-centered"><h1 className="title is-3">Crear político</h1></div><hr/>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <div className="level">
            <div className="level-item">
              <Field name="nombre" component={this.renderTextField} label="Nombre completo" />
            </div>
          </div>

          <div className="level">
            <div className="level-item">
              <Field name="partido" component={this.renderSelectField} label="Selecciona un partido">
                {this.renderPartidos(partidos)}
              </Field>
            </div>
          </div>

        
          <div className="level">
            <div className="level-item">
              <Field name="tipo" component={this.renderRadioGroup}  >
                <RadioButton value={1} label="Funcionario" />
                <RadioButton value={2} label="Candidato" />
              </Field>
            </div>
          </div>

          <div className="level">
            <div className="level-item">
              <Field name="region" component={this.renderSelectField} label="Selecciona una region" onChange={value => { this.setSelectedRegion(value) }}>
                {this.renderRegiones(estados)}
              </Field>
            </div>
          </div>

          <div className="level">
            <div className="level-item">
              {this.renderRegionExist(estados)}
          </div></div>

           <div className="level">
            <div className="level-item">
              <Field name="link" component={this.renderTextField} label="Link" />
            </div>
          </div>

          <div className="level">
          <div className="level-item">
          <div>
            <button type="submit" className="button is-info">
              Submit
            </button>
          </div></div></div>
        </form>
      </div></div></div></div></section>
      <AnimatedBackground />
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

 if(!values.nombre){
    errors.nombre = "Escriba el nombre completo";
  }
if(/^\s+|\s+$/.test(values.nombre)) {
  errors.nombre = "Escriba un nombre completo válido";

}

   if(!values.partido){
    errors.partido = "Seleccione el partido";
  }

   if(!values.region){
    errors.region = "Seleccione la región";
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
    estados: state.politico.estados,
    partidos: state.politico.partidos
  };
}


export default reduxForm({
  form: 'PoliticoForm',
  validate
})(connect(mapStateToProps, { fetchEstados, fetchPartidos, insertPolitico })(PoliticoForm));
