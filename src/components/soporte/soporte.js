import React, { Component } from 'react';
import { connect } from "react-redux";

import NeedLogin from "./../generics/need_login";
import Chat from "./chat";
import ChatServidor from "./chat_servidor";

class Soporte extends Component {
	constructor(props) {
        super(props);
    }

    componentDidCatch(error, info) {
        console.log("Error: " + error);
        console.log("Info: " + info);
      }

	render(){
        if(JSON.stringify(this.props.user) != '{}')
            if(this.props.user.id_tipo_usuario == '3')
                return (<div><ChatServidor id_local = {this.props.user.id_usuario} /><div><br /></div></div>)
            else
                return (<div className="section">
                        <div className="columns"><div className="column
                        is-offset-1-mobile
                        is-offset-1-tablet
                        is-offset-2-desktop
                        is-offset-3-widescreen
                        is-8-desktop
                        is-10-mobile
                        is-10-tablet
                        is-6-widescreen">
                        <h1 className="is-size-2">Soporte</h1>
                        <hr />
                        <Chat id_local = {this.props.user.id_usuario} id_externo = {1} />
                        </div>
                        <div><br /></div></div>
                    </div>)
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
