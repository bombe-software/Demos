import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPendientesHistorial } from "../../actions";

class PendientesHistorial extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPendientesHistorial();
  }

  renderList(){
    let {historial} = this.props;
    return _.map(historial, evento => {
        console.log(evento);
        return (
            <div key={evento.id_historial}>
                    {evento.id_historial}
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

export default connect(mapStateToProps, { fetchPendientesHistorial })(PendientesHistorial);