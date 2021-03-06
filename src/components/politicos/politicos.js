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

  /**
  * Es una forma de capturar cualquier error en la clase 
  * y que este no crashe el programa, ayuda con la depuracion
  * de errores
  * @method componentDidCatch
  * @const info Es más informacion acerca del error
  * @const error Es el titulo del error
  */
  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }

    render() {
        return (
            <div className="section">
              <div className="columns mobile">
                <div className="column is-offset-1-tablet is-offset-1-mobile is-offset-2-desktop is-10-mobile is-10-tablet is-8-desktop">
                <h1 className="is-size-2">Políticos</h1>
                <hr />
                </div>
              </div>
              <div className="columns mobile">
                  <div className="column is-2-desktop is-offset-2-desktop is-4-tablet is-offset-1-tablet is-10-mobile is-offset-1-mobile">
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
                  <div className="column is-6-desktop is-10-mobile is-offset-1-mobile is-6-tablet">
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
