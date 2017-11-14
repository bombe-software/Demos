import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPolitico } from "../../../actions";

import Propuestas from './propuestas';
import Historial from './historial';

class PoliticoDetail extends Component {
    constructor(props) {
        super(props);
        let { id } = this.props.match.params;
        this.state = {
            type: 'propuestas',
            id_politico: id
        };
        this.updatePropuestas = this.updatePropuestas.bind(this);
        this.updateHistorial = this.updateHistorial.bind(this);

        this.renderPerfil = this.renderPerfil.bind(this);
    }

    componentDidMount(){
        this.props.fetchPolitico(this.state.id_politico);
    }


    updatePropuestas() {
        this.setState({ type: 'propuestas' })
    }
    updateHistorial() {
        this.setState({ type: 'historial' })
    }

    renderSection() {
        if(this.props.politico != undefined){
            let {type} = this.state;
            if (type == "propuestas") {
                return (
                    <div>
                        <Propuestas
                            id_politico={this.props.politico.id_politico}
                            politico_bio = {this.props.politico}
                        />
                    </div>
                );
            } else if (type == "historial") {
                return (
                    <div>
                        <Historial
                            id_politico={this.props.politico.id_politico}
                        />
                    </div>
                );
            }
        }else{
            return(
                    <div className="spinner"></div>
            );
        }
    }

    renderPerfil(){
        if(this.props.politico != undefined){
            let {politico} = this.props;
            return(
            <div>

                <div className="card">
                    <div className="card-image">
                      <figure className="image is-1by1">
                        <img src="../../../assets/img/politico.png" />
                      </figure>
                    </div>
                    <div className="card-content">
                        <div className="is-size-5 has-text-centered">
                            <span>{politico.nombre}</span>
                        </div>
                        <hr/>
                        <span className="is-size-6">
                        <p>Partido: {politico.partido}</p>
                          <p>Experiencia: {politico.fecha_incio_politica}</p>
                          <p>Slogan de campaña: {politico.motivacion}</p>
                      </span>
                    </div>
                </div>

        </div>
            );
        }else{
            return(
                <div>
                    <div className="spinner">
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <br/>
                <div className="container">
                    <div className="columns is-desktop">
                        <div className="column is-10 is-10-mobile is-offset-1 is-offset-1-mobile">
                            <div className="columns is-desktop">
                                <div className="column is-2-fullhd is-3-widescreen is-4-desktop is-12-tablet is-12-mobile is-offset-2-fullhd">
                                {this.renderPerfil()}
                                </div>
                                <div className="column is-6-fullhd is-9-widescreen is-8-desktop is-12-tablet is-12-mobile">
                                    <div className="tabs is-medium is-boxed">
                                        <ul>
                                            <li className={this.state.type == "propuestas" ? 'is-active' : ''}>
                                                <a onClick={this.updatePropuestas}>
                                                  <span className="icon is-small">
                                                    <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                                                  </span>
                                                  <span>&nbsp;Propuestas</span>
                                                </a>
                                            </li>
                                            <li className={this.state.type == "historial" ? 'is-active' : ''}>
                                                <a onClick={this.updateHistorial}>
                                                  <span className="icon is-small">
                                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                  </span>
                                                  <span>&nbsp;Historial</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        {this.renderSection()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        politico: state.politico.politicoSelected
    };
}

export default connect(mapStateToProps, { fetchPolitico })(PoliticoDetail);
