import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchConversaciones } from "../../actions";
import Chat from "./chat";

class ChatServidor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_externo: 0
        };
    }

    componentDidMount(){
        this.props.fetchConversaciones(this.props.id_local)
    }

    listConversaciones(conversaciones){
        return _.map(conversaciones, conversacion => {
            return(
                <div key={conversacion.id_remitente} onClick={()=>{ this.updateIdExterno(conversacion.id_remitente) }}>
                    <div className="panel-block">
                        {conversacion.nombre_usuario}
                    </div>
                 </div>
            );
        });
    }

    updateIdExterno(id){
        this.setState({ id_externo: id });
    }

    componentDidCatch(error, info) {
        console.log("Error: " + error);
        console.log("Info: " + info);
      }
      
    render(){
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
                            <Chat id_local = {this.props.id_local} id_externo = {this.state.id_externo} />
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

export default connect(mapStateToProps, {fetchConversaciones} )(ChatServidor);