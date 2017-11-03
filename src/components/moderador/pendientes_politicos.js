import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPendientesPolitico, callPolitico, deletePolitico } from "../../actions";

class PendientesPoliticos extends Component {
  constructor(props) {
    super(props);
    this.aceptar = this.aceptar.bind(this);
    this.denegar = this.denegar.bind(this);
  }

  componentDidMount() {
    this.props.fetchPendientesPolitico();
  }

  aceptar(id) {
    let { fetchPendientesPolitico } = this.props;
    this.props.callPolitico(id, fetchPendientesPolitico);

  }

  denegar(id) {
    let { fetchPendientesPolitico } = this.props;
    this.props.deletePolitico(id, fetchPendientesPolitico);
  }

  renderList() {
    let { politicos } = this.props;
    return _.map(politicos, politico => {
      return (
        <div key={politico.id_politico}>
          {politico.id_politico}
          <button onClick = {()=>{ this.denegar(politico.id_politico)}}>
            Denegar
          </button>
          <button onClick = {()=>{ this.aceptar(politico.id_politico)}}>
            Aceptar
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        Politicos
          {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    politicos: state.pendientes.politicos
  };
}

export default connect(mapStateToProps, { fetchPendientesPolitico, callPolitico, deletePolitico })(PendientesPoliticos);
