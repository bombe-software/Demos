import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPendientesPropuesta } from "../../actions";

class PendientesPropuestas extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPendientesPropuesta();
  }

  renderList(){
    let {propuestas} = this.props;
    return _.map(propuestas, propuesta => {
        console.log(propuesta);
        return (
            <div key={propuesta.id_propuesta}>
                    {propuesta.id_propuesta}
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

export default connect(mapStateToProps, { fetchPendientesPropuesta })(PendientesPropuestas);