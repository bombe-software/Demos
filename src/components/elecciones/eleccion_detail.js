import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchElecciones } from "../../actions";

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
        return (
            <div>
                <div>
                    {this.renderTitle()}
                    {console.log(this.props.elecciones)}
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
        elecciones: state.elecciones
    };
}

export default connect(mapStateToProps, {  fetchElecciones })(EleccionDetail);