import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPendientesHistorial, callHistorial, deleteHistorial } from "../../actions";

class PendientesHistorial extends Component {
  constructor(props) {
    super(props);
    this.aceptar = this.aceptar.bind(this);
    this.denegar = this.denegar.bind(this);
  }

  componentDidMount() {
    this.props.fetchPendientesHistorial();
  }

  aceptar(id) {
    let { fetchPendientesHistorial } = this.props;
    this.props.callHistorial(id, fetchPendientesHistorial);

  }

  denegar(id) {
    let { fetchPendientesHistorial } = this.props;
    this.props.deleteHistorial(id, fetchPendientesHistorial);
  }

  renderList() {
    let { historial } = this.props;
    let {aceptar, denegar} = this;
    return _.map(historial, evento => {
      return (
        <div key={evento.id_historial}>
          {evento.id_historial}
          {evento.nombre}
          <button onClick = {()=>{this.denegar(evento.id_historial)}}>
            Denegar
          </button>
          <button onClick = {()=>{this.aceptar(evento.id_historial)}}>
            Aceptar
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        Historial
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    historial: state.pendientes.historial
  };
}

export default connect(mapStateToProps, { fetchPendientesHistorial, callHistorial, deleteHistorial })(PendientesHistorial);