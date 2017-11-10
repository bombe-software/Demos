import React, { Component } from 'react';
import { connect } from "react-redux";
import io from 'socket.io-client';

import WindowMessages from "./window_messages";
import TextMessage from "./text_message";

import { fetchMensajes } from "../../actions";

class ChatCliente extends Component {
	constructor(props) {
        super(props);
        this.state = {
            socket: io('http://localhost:3000'),
            id_externo: 3
        };
        let {id_local} = this.props;
        this.state.socket.emit('asociar_id', { id_usuario: id_local });
        this.handleReloadMessages = this.handleReloadMessages.bind(this);
    }
    
    componentDidMount(){
        let {id_local, fetchMensajes} = this.props;
        let {id_externo} = this.state;
        fetchMensajes(id_local, id_externo);  
        this.state.socket.on('actualizar_msg', function (data) {
			fetchMensajes(id_local, id_externo);  
		});  
    }
    
    handleReloadMessages(){
        let {id_local} = this.props;
        let {id_externo} = this.state;
        this.props.fetchMensajes(id_local, id_externo);
        this.state.socket.emit('msg', { id_destinatario: id_externo });
    }

	render(){
        let {id_local, mensajes} = this.props;
        let {id_externo} = this.state;
        return (
            <div>
                <WindowMessages 
                    id_local = {id_local}
                    mensajes = {mensajes}
                />
                <TextMessage
                    id_local = {id_local}
                    id_externo = {id_externo}
                    handleReloadMessages = {this.handleReloadMessages}
                />
            </div>
        )
	}
}

function mapStateToProps(state) {
    return { 
        mensajes: state.mensajes.mensajes
    };
}

export default connect(mapStateToProps, { fetchMensajes })(ChatCliente);