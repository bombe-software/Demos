import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoliticos } from "../../actions";
import { Link } from "react-router-dom";

class PoliticosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          puestos: ['Funcionario', 'Candidato']
      };
  }

  componentDidMount() {
    this.props.fetchPoliticos(this.props.id_puesto, this.props.id_estado);
  }

  renderTitle() {
    let {id_estado} = this.props;
    if(id_estado == 33){
      return (
          <div>
              <p key={1}>{this.state.puestos[this.props.id_puesto]}&nbsp;/&nbsp;Nacional</p>
          </div>
      );
    }else{
      return (
            <p>
              {this.state.puestos[this.props.id_puesto]}&nbsp;/&nbsp;
              {this.props.estados[this.props.id_estado].zona}&nbsp;/&nbsp;
              {this.props.estados[this.props.id_estado-1].nombre}
            </p>
      );
    }
  }




  renderListPoliticos(){
    let {politicos} = this.props;
    return _.map(politicos, politico => {
      return (
          <div key={politico.id_politico}>
              <div className="panel-block">
                <span className="panel-icon">
                  <i className="fa fa-user"></i>
                </span>
                  <Link to={'/politico/'+politico.id_politico} >
                    {politico.nombre}
                  </Link>
              </div>
          </div>
      );
    });
  }

  render(){
    return(
      <div>
        <div className="level">
            <div className="level-left"></div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="has-text-right">
                      <Link to="/crear/politico/" className="button is-success">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;&nbsp;Agregar un político
                      </Link >
                    </p>
                  </div>
              </div>
        </div>
        <div>
          <div className="panel">
          <div className="panel-heading">
            {this.renderTitle()}
          </div>
          {this.renderListPoliticos()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { politicos: state.politico.politicos };
}

export default connect(mapStateToProps, { fetchPoliticos })(PoliticosList);
