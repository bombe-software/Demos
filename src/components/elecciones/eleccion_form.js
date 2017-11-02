import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoliticos, insertElecciones } from "../../actions";

class EleccionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_estado: null,
            politicos: null,
            id_politico_selected: null
        };
        this.renderTitle = this.renderTitle.bind(this);
        this.handlePoliticoSelected = this.handlePoliticoSelected.bind(this);
    }

    componentDidMount(){
        this.props.fetchPoliticos(1, this.props.id_estado);
        let {id_estado} = this.props;
        this.setState({
            id_estado 
        });
    }

    handlePoliticoSelected(id){
        return(
            ()=>{
                this.setState({
                    id_politico_selected: id 
                });
            }
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id_estado !== this.state.id_estado) {
            let {id_estado} = this.props;
            this.setState({
                id_estado 
            });
            this.props.fetchPoliticos(1, this.props.id_estado);
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

    renderListPoliticos(){
        let {politicos} = this.props;
        return _.map(politicos, politico => {
          return (
              <div key={politico.id_politico} onClick={this.handlePoliticoSelected(politico.id_politico)}>
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
                </div>
              </div>
          );
        });
      }


    render() {
        return (
            <div>
                <div>
                    {this.renderTitle()}
                </div>
                <div>
                    {this.renderListPoliticos()}
                </div>
                <button onClick = {this.props.handleForm}>
                        Contestar encuesta
                </button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        user: state.user,
        politicos: state.politico.politicos
    };
}

export default connect(mapStateToProps, { fetchPoliticos, insertElecciones })(EleccionForm);