import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import CircularProgress from 'material-ui/CircularProgress';
import { Field, reduxForm } from "redux-form";
import GenericForm from '../generics/form';
import { insertMensajes, fetchMensajes } from "../../actions";
import io from 'socket.io-client';

class Soporte extends GenericForm {
	constructor(props) {
		super(props);
		this.state = {
			socket: io('http://localhost:3000'),
			id_destinatario: 1
		};
		if(!(JSON.stringify(this.props.user) == '{}')){
			let {id_usuario} = this.props.user;
			this.state.socket.emit('asociar_id', { id_usuario });
		}	
        this.renderListMensajes = this.renderListMensajes.bind(this);
  	}

  	componentDidMount(){
		let {id_usuario} = this.props.user;
		let {fetchMensajes} = this.props;
		fetchMensajes(id_usuario);
		this.state.socket.on('actualizar_msg', function (data) {
			fetchMensajes(id_usuario);
		});
  	}

  	onSubmit(values) {
		let { socket, id_destinatario } = this.state;
		let {id_usuario} = this.props.user;
		this.props.insertMensajes(id_usuario, id_destinatario, values.mensaje);
		socket.emit('msg', { id_destinatario });
	}

  	renderListMensajes(){
	    let {mensajes} = this.props;
	    return _.map(mensajes, mensaje => {
	      return (
	          <div key={mensaje.id_mensaje}>
	  			{mensaje.mensaje}
	          </div>
	      );
	    });
	}

	render(){
		const { handleSubmit } = this.props;
	  	if(JSON.stringify(this.props.user) == '{}'){
	  		return(
	  			<div>
	  				Inicia sesion para acceder
	  			</div>
	  		);
	  	}else{
	  		let {id_usuario} = this.props.user;
			let mensajes = _.toArray(this.props.mensajes);
			this.state.socket.emit('asociar_id', { id_usuario });
	  		return(
			    <div>
			    	Soporte
		  			<div>
		  				{this.renderListMensajes()}
		  			</div>
		  			<div>
			          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			          	<Field name="mensaje" component={this.renderTextField} label={""} />
			            <button>
			                Submit
			            </button>
			          </form>
		  			</div>
			    </div>
		    );
	  	}

	}
}


function validate(values) {
  const errors = {};



  return errors;
}

function mapStateToProps(state) {
    return { 
        user: state.user,
        mensajes: state.mensajes
    };
}

export default reduxForm({
  form: "mensajeForm",
  validate
})(connect(mapStateToProps, { insertMensajes, fetchMensajes })(Soporte));
