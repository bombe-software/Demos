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
        let selected = {'border': 'rgba(69, 196, 158, 0.9) solid 2px'}
        return _.map(politicos, politico => {
          return (
              <div style={{'cursor': 'pointer'}} key={politico.id_politico} onClick={this.handlePoliticoSelected(politico.id_politico)}>
              <br />

                    <div className="box" style={this.state.id_politico_selected == politico.id_politico ? {selected}:{}}>
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-32x32">
                          <img src="../../assets/img/politico.png" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{politico.nombre}&nbsp;&nbsp;&nbsp;
                        </p>
                        {console.log(politico)}
                      </div>
                    </div>
                    </div>

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
            <div>
                <div className="card-content">
                    <div className="title">
                      {this.renderTitle()}
                    </div>
                </div>
                  <div className="card-image">
                    <div className="hero is-small">
                      <div className="hero-body">
                        {this.renderListPoliticos()}
                      </div>
                    </div>
                  </div>
                <div className="level">
                  <div className="level-item">
                  <button className="button is-primary" onClick = {this.props.handleForm}>
                          Enviar respuesta
                  </button>
                  </div>
                </div>
                <br/><br/>
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
