import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPendientesPropuesta, callPropuesta, deletePropuesta } from "../../actions";

class PendientesPropuestas extends Component {
  constructor(props) {
    super(props);
    this.aceptar = this.aceptar.bind(this);
    this.denegar = this.denegar.bind(this);
  }

  componentDidMount() {
    this.props.fetchPendientesPropuesta();
  }

  aceptar(id) {
    let { fetchPendientesPropuesta } = this.props;
    this.props.callPropuesta(id, fetchPendientesPropuesta);

  }

  denegar(id) {
    let { fetchPendientesPropuesta } = this.props;
    this.props.deletePropuesta(id, fetchPendientesPropuesta);
  }

  renderList() {
    let { propuestas } = this.props;
    return _.map(propuestas, propuesta => {
      return (
        <div key={propuesta.id_propuesta}>
         <div className="panel-block">
            <span className="panel-icon">
              <a className="is-primary" onClick = {()=>{this.aceptar(propuesta.id_propuesta)}}>
                <i className="fa fa-check"></i>
              </a> &nbsp;&nbsp;&nbsp;
            </span>
            <span className="panel-icon">
              <a className="is-danger" style={{color: 'red'}} onClick = {()=>{this.denegar(propuesta.id_propuesta)}}>
                <i className="fa fa-times"></i>
              </a>
            </span>
            {propuesta.nombre}
         </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-heading">Propuestas</div>
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    propuestas: state.pendientes.propuestas
  };
}

export default connect(mapStateToProps, { fetchPendientesPropuesta, callPropuesta, deletePropuesta })(PendientesPropuestas);
