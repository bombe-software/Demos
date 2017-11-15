import React, { Component } from 'react';
import { connect } from "react-redux";
import io from 'socket.io-client';

import WindowMessages from "./window_messages";
import TextMessage from "./text_message";

import { fetchMensajes } from "../../actions";

class Chat extends Component {
	constructor(props) {
        super(props);
        let {id_local, id_externo} = this.props;
        this.state = {
            socket: io('http://localhost:3000'),
            id_externo
        };
        this.state.socket.emit('asociar_id', { id_usuario: id_local });
        this.handleReloadMessages = this.handleReloadMessages.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id_externo !== this.state.id_externo) {
            this.setState({
                id_externo: nextProps.id_externo
            });
            let {id_local, fetchMensajes} = this.props;
            fetchMensajes(id_local, nextProps.id_externo);  
        }
    }
    
    componentDidMount(){
        let {id_local, fetchMensajes} = this.props;
        let {id_externo} = this.state;
        let {handleReloadMessages} = this;
        fetchMensajes(id_local, id_externo);  
        this.state.socket.on('actualizar_msg', function (data) {
			handleReloadMessages();  
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
            <div className="hero">
                        <div className="">
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
            </div>
        )
	}
}

function mapStateToProps(state) {
    return { 
        mensajes: state.mensajes.mensajes
    };
}

export default connect(mapStateToProps, { fetchMensajes })(Chat);