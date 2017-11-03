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
          {propuesta.id_propuesta}
          <button onClick = {()=>{ this.denegar(propuesta.id_propuesta)}}>
            Denegar
          </button>
          <button onClick = {()=>{ this.aceptar(propuesta.id_propuesta)}}>
            Aceptar
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        Propuestas
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
