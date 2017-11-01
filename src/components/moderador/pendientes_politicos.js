import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPendientesPolitico } from "../../actions";

class PendientesPoliticos extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchPendientesPolitico();
  }

  renderList(){
    let {politicos} = this.props;
    return _.map(politicos, politico => {
        console.log(politico);
        return (
            <div key={politico.id_politico}>
                    {politico.id_politico}
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

export default connect(mapStateToProps, { fetchPendientesPolitico })(PendientesPoliticos);