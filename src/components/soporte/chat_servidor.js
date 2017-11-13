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
                    {conversacion.nombre_usuario}
                 </div>
            );
        });
    }

    updateIdExterno(id){
        this.setState({ id_externo: id });
    }
      
    render(){
        return (
            <div>
                {this.listConversaciones(this.props.conversaciones)}
                <Chat id_local = {this.props.id_local} id_externo = {this.state.id_externo} />
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