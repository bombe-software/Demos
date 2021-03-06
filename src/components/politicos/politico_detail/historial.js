import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHistorial } from "../../../actions";

class Historial extends Component {
    constructor(props) {
        super(props);
        this.renderHistorialList = this.renderHistorialList.bind(this);
    }

    componentDidMount(){
        this.props.fetchHistorial(this.props.id_politico);
    }

    renderHistorialList() {
        return _.map(this.props.historial, historial => {
            return (
                <div  key={historial.id_historial} >
                    <div className="columns is-mobile is-relative">
                        <div className="column timeline-element">
                            <div className="point">
                            </div>
                            <div className="timeline-text">
                                <div className="box">
                                    {historial.fecha.substring(0, 10)} | {historial.nombre}
                                </div>
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
        if(this.props.historial != undefined){
            return(
                <div>
                    <div className="level">
                    <div className="level-left"></div>
                    <div className="level-right">
                      <div className="level-item">
                        <p className="has-text-right">
                          <Link to={"/crear/historial/"+this.props.id_politico} className="button is-success">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            &nbsp;&nbsp;&nbsp;Agregar un evento
                          </Link >
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="timeline ">
                    {this.renderHistorialList()}
                    </ul>
                </div>
                );
        }else{
            return(
                <div className="spinner">
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        historial: state.politico.historial
    };
}

export default connect(mapStateToProps, { fetchHistorial })(Historial);
