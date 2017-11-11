import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchElecciones } from "../../actions";

import {Pie} from 'react-chartjs-2';

class EleccionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_estado: null,
            elecciones: null
        };
        this.renderTitle = this.renderTitle.bind(this);
    }

    componentDidMount(){
        this.props.fetchElecciones(this.props.id_estado);
        let {id_estado} = this.props;
        this.setState({
            id_estado
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id_estado !== this.state.id_estado) {
            let {id_estado} = this.props;
            this.setState({
                id_estado
            });
            this.props.fetchElecciones(id_estado);
        }
    }

    renderTitle() {
        let {id_estado} = this.props;
        if(id_estado == 33){
          return (
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li key={2}><a href="#" >Nacional</a></li>
                </ul>
              </nav>
          );
        }else{
          return (
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li key={2}><a href="#" >Estatal</a></li>
                  <li key={3}><a href="#" >{this.props.estados[this.props.id_estado].zona}</a></li>
                  <li key={4}><a href="#" >{this.props.estados[this.props.id_estado-1].nombre}</a></li>
                </ul>
              </nav>
          );
        }
    }

    render() {

      let colorList = [
              'rgba(69, 196, 158, 0.9)',
              'rgba(115, 86, 201, 0.9)',
              'rgba(234, 83, 136, 0.9)',
              'rgba(37, 185, 140, 0.9)',
              'rgba(230, 46, 111, 0.9)',
              'rgba(89, 55, 191, 0.9)'
              ];

        let colorOpacityList = [
          'rgba(69, 196, 158, 1)',
          'rgba(115, 86, 201, 1)',
          'rgba(234, 83, 136, 1)',
          'rgba(37, 185, 140, 1)',
          'rgba(230, 46, 111, 1)',
          'rgba(89, 55, 191, 1)'
              ];

        let labelsProps = [];

        let dataProps = [];

        _.mapValues(this.props.elecciones, function(eleccion) {
            labelsProps.push(eleccion.nombre);
            dataProps.push(eleccion.votos);
        });

        let data = {
            labels: labelsProps,
            datasets: [{
              data: dataProps,
              backgroundColor: colorList,
              hoverBackgroundColor: colorOpacityList
            }]
          };

        console.log(JSON.stringify(this.props.elecciones));

        if(JSON.stringify(this.props.elecciones) == '[]' || JSON.stringify(this.props.elecciones) == '{}'){
              return(
                <div>
                  <div className="card-content">
                  <div className="title">{this.renderTitle()}</div>
                  </div>

                  <div className="card-image">
                    <div className="hero is-light">
                      <div className="hero-body">
                        <h3>No hay elecciones para mostrar en esta región</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-text">Resultados de la encuesta de preferencia</div>
                  </div>
              </div>
                );
        }else{
          return (
              <div>
                  <div className="card-content">
                      <div className="title">
                          {this.renderTitle()}
                      </div>
                  </div>

                  <div className="card-image">
                      <div className="hero is-small">
                        <div className="hero-body">
                          <Pie data={data} />
                        </div>
                      </div>
                  </div>
                  <div className="card-content">
                      <br />
                      <button className="button is-primary" onClick = {this.props.handleForm}>
                          Contestar encuesta
                      </button>
                  </div>
              </div>
          );
        }
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        elecciones: state.elecciones
    };
}

export default connect(mapStateToProps, {  fetchElecciones })(EleccionDetail);
