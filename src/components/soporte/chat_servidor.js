//NPM packages
import React, { Component } from 'react';
import { connect } from "react-redux";

//Actions
import { fetchConversaciones } from "../../actions";

//Components
import Chat from "./chat";

/**
* @class ChatServidor
* @author Vicroni <drasa_tec@hotmail.com>
* @author Someone <none>
* @version  1.0 <1/12/17>
* @description: 
* El objetivo de la clase es contolar el 
* aspecto grafico del chat servidor
*/
class ChatServidor extends Component {
    /**
     * Inicializa el state en donde se colocan
     * el @const id_externo en donde se pone la
     * que esta teniendo lugar
     * @constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            id_externo: 0
        };
    }
    /**
     * Carga de manera logica las conversaciones y
     * renderiza el conmportamiento grafico
     * @method componentDidMount
     * @function props.fetchConversaciones Llamada ajax para obtener las conversaciones
     */
    componentDidMount() {
        this.props.fetchConversaciones(this.props.id_local)
    }

    /**
     * Enlista las conversaciones de manera grafica
     * @method listConversaciones
     * @param conversaciones Un array con todas las conversaciones
     */
    listConversaciones(conversaciones) {
        return _.map(conversaciones, conversacion => {
            return (
                <div key={conversacion.id_remitente} onClick={() => { this.updateIdExterno(conversacion.id_remitente) }}>
                    <div className="panel-block">
                        {conversacion.nombre_usuario}
                    </div>
                </div>
            );
        });
    }

    updateIdExterno(id) {
        this.setState({ id_externo: id });
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
            <div className="hero">
                <div className="columns">
                    <div className="column is-2-desktop is-4-tablet is-offset-2-desktop is-offset-1-tablet is-10-mobile is-offset-1-mobile">
                        <div className="panel user-list">
                            <div className="panel-heading">Usuarios</div>
                            {this.listConversaciones(this.props.conversaciones)}
                        </div>
                    </div>
                    <div className="column is-6-desktop is-6-tablet is-10-mobile is-offset-1-mobile">
                        <Chat id_local={this.props.id_local} id_externo={this.state.id_externo} />
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        conversaciones: state.mensajes.conversaciones
    };
}

export default connect(mapStateToProps, { fetchConversaciones })(ChatServidor);