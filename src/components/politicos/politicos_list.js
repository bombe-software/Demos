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
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li key={1}><a href="#" >{this.state.puestos[this.props.id_puesto]}</a></li>
              <li key={2}><a href="#" >Nacional</a></li>
            </ul>
          </nav>
      );
    }else{
      return (
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li key={1}><a href="#" >{this.state.puestos[this.props.id_puesto]}</a></li>
              <li key={2}><a href="#" >Estatal</a></li>
              <li key={3}><a href="#" >{this.props.estados[this.props.id_estado].zona}</a></li>
              <li key={4}><a href="#" >{this.props.estados[this.props.id_estado-1].nombre}</a></li>
            </ul>
          </nav>
      );
    }
  }




  renderListPoliticos(){
    let {politicos} = this.props;
    return _.map(politicos, politico => {
      return (
          <div key={politico.id_politico}>
          <br />
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-32x32">
                      <img src="../../assets/img/politico.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{politico.nombre}</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="card-footer-item">
                  <Link to={'/politico/'+politico.id_politico} >Ver perfil</Link>
                </div>
              </div>
            </div>
          </div>
      );
    });
  }

  render(){
    return(
      <div>
        <div>
          {this.renderTitle()}
        </div>
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
          {this.renderListPoliticos()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { politicos: state.politico.politicos };
}

export default connect(mapStateToProps, { fetchPoliticos })(PoliticosList);
