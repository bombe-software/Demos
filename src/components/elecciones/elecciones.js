import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEstados } from "../../actions";
import EleccionDetail from "./eleccion_detail";
import EleccionForm from "./eleccion_form";

class Elecciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_estado: 33,
            formActive: false
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.renderSection = this.renderSection.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }
    componentDidMount() {
        this.props.fetchEstados();
    }

    updateSearch(id){
        return (()=>{
            this.setState({
                id_estado: id
            });
        })
    }

    getActiveEstado(i){
      if(i == this.state.id_estado){
        return 'is-active';
      }
      return '';
    }

    handleForm(){
        if(this.state.formActive){
            this.setState({
                formActive: false
            });
        }else{
            this.setState({
                formActive: true
            });
        }
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
                                      onClick={this.updateSearch(mini_item.id)}
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

    renderSection(id_estado){
        if(this.state.formActive){
            return(
                <EleccionForm
                    id_estado = {id_estado}
                    estados = {_.values(this.props.estados)}
                    handleForm = {this.handleForm}
                />
            );
        }else{
            return(
                <EleccionDetail
                    id_estado = {id_estado}
                    estados = {_.values(this.props.estados)}
                    handleForm = {this.handleForm}
                />
            );
        }

    }

    render() {

        return (
            <div className="section">
            <div className="columns mobile">
              <div className="column is-offset-1-tablet is-offset-1-mobile is-offset-2-desktop is-10-mobile is-10-tablet is-8-desktop">
              <h1 className="is-size-2">Elecciones</h1>
              <hr />
              </div>
            </div>
              <div className="columns">
                  <div className="column is-2-desktop is-3-tablet is-10-mobile is-offset-2-desktop is-offset-1-tablet is-offset-1-mobile">
                    <aside className="menu">
                      <div>
                          <p className="menu-label">Region</p>
                          <ul className="menu-list-light">
                                <li>
                                  <div>
                                      <a onClick={this.updateSearch(33)} className={this.getActiveEstado(33)}>Nacional</a>
                                  </div>
                                </li>
                                {this.renderEstados()}
                          </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="column is-6-desktop is-7-tablet is-10-mobile is-offset-1-mobile">
                    <div className="card">
                        {this.renderSection(this.state.id_estado)}
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

export default connect(mapStateToProps, { fetchEstados})(Elecciones);
