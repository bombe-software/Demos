import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEstados } from "../../actions";
import PoliticosList from "./politicos_list";

class Politicos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_puesto: 0,
            id_estado: 33
        };
        this.updateSearch = this.updateSearch.bind(this);
    }
    componentDidMount() {
        this.props.fetchEstados();


    }

    updateSearch(id, tipo){
        return (()=>{
            this.setState({
                id_estado: id,
                id_puesto: tipo
            });
        })
    }

    getActivePuesto(i){
      if(i == this.state.id_puesto){
        return 'is-active';
      }
      return '';
    }

    getActiveEstado(i){
      if(i == this.state.id_estado){
        return 'is-active';
      }
      return '';
    }

    renderEstados() {
        let group = _.groupBy(_.values(this.props.estados), 'zona');
        return _.map(group, item => {
            if(item[0].zona != 'Nacional')
            return (
                <div key={item[0].zona}>
                    <li>
                      <details>
                           <summary>{item[0].zona}</summary>
                           <ul>
                          {_.map(item, mini_item => {
                              return (
                                  <li key={mini_item.id}>
                                      <a
                                      onClick={this.updateSearch(mini_item.id, this.state.id_puesto)}
                                      className={this.getActiveEstado(mini_item.id)} >{mini_item.nombre}</a>
                                  </li>
                              )
                          })}
                          </ul>
                      </details>
                    </li>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="section">
              <div className="columns">
                  <div className="column is-3-desktop is-offset-2-desktop">
                    <aside className="menu">
                      <div>
                          <p className="menu-label">Tipo</p>
                          <ul className="menu-list-light">
                            <li>
                                <a onClick={this.updateSearch(this.state.id_estado, 0)} className={this.getActivePuesto(0)}>Funcionarios</a>
                            </li>
                            <li>
                                <a onClick={this.updateSearch(this.state.id_estado, 1)} className={this.getActivePuesto(1)}>Candidatos</a>
                            </li>
                          </ul>
                      </div>
                      <br />
                      <div>
                          <p className="menu-label">Region</p>
                          <ul className="menu-list-light">
                                <li>
                                  <div>
                                      <a onClick={this.updateSearch(33, this.state.id_puesto)} className={this.getActiveEstado(33)}>Nacional</a>
                                  </div>
                                </li>
                                {this.renderEstados()}
                          </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="column is-5-desktop">
                    <div key={this.state.id_estado+this.state.id_puesto}>
                        <PoliticosList
                            id_estado = {this.state.id_estado}
                            estados = {_.values(this.props.estados)}
                            id_puesto = {this.state.id_puesto}
                        />
                    </div>
                  </div>
              </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        estados: state.politico.estados
    };
}

export default connect(mapStateToProps, { fetchEstados})(Politicos);
