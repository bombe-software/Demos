import React, { Component } from 'react';
import { connect } from "react-redux";

import NeedLogin from "./../generics/need_login";
import ChatCliente from "./chat_cliente";
import ChatServidor from "./chat_servidor";

class Soporte extends Component {
	constructor(props) {
        super(props);
    }
      
	render(){
        if(JSON.stringify(this.props.user) != '{}')
            if(this.props.user.id_tipo_usuario == '1')
                return <ChatServidor id_local = {this.props.user.id_usuario} />
            else
                return <ChatCliente id_local = {this.props.user.id_usuario} />
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