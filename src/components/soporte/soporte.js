import React, { Component } from 'react';
import { connect } from "react-redux";

import NeedLogin from "./../generics/need_login";
import Chat from "./chat";
import ChatServidor from "./chat_servidor";

class Soporte extends Component {
	constructor(props) {
        super(props);
    }
      
	render(){
        if(JSON.stringify(this.props.user) != '{}')
            if(this.props.user.id_tipo_usuario == '3')
                return <ChatServidor id_local = {this.props.user.id_usuario} />
            else
                return <Chat id_local = {this.props.user.id_usuario} id_externo = {1} />
        else
            return <NeedLogin />
    }
    
}

function mapStateToProps(state) {
    return { 
        user: state.user
    };
}

export default connect(mapStateToProps, null )(Soporte);