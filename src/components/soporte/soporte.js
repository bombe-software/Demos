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

	renderUserMessage(mensaje){
		return(
			<div className="level">
				<div className="level-left">
				<div className="level-item">
						<div className="box mensaje mensaje-usuario">
							{mensaje.mensaje}
						</div>
					</div>
				</div>
				<div className="level-right">
				</div>
			</div>
			);
	}

	renderAdminMessage(mensaje){
		return(
			<div className="level">
				<div className="level-left">
				</div>
				<div className="level-right">
				<div className="level-item">
						<div className="box mensaje mensaje-admin">
							{mensaje.mensaje}
						</div>
					</div>
				</div>
			</div>
			);
	}

  	renderListMensajes(){
	    let {mensajes} = this.props;
	    return _.map(mensajes, mensaje => {
	      return (
	          <div key={mensaje.id_mensaje}>
	          	{mensaje.id_destinatario!=1 ? this.renderUserMessage(mensaje) : this.renderAdminMessage(mensaje)}
	          </div>
	      );
	    });
	}

	deleteContent(){
		
	}

	render(){
		const { handleSubmit } = this.props;
	  	if(JSON.stringify(this.props.user) == '{}'){
	  		return(
	  			<div>
	  			<div className="hero is-primary is-fullheight">
					<div className="hero-body">
						<div className="container">
							<h1 className="title has-text-centered is-size-2">
						        Para ingresar a este módulo, necesitas &nbsp;
						        <Link to="/login" style={{color: '#171717'}}>Iniciar sesión</Link>
						    </h1>
						    <br />
						    <h2 className="subtitle has-text-centered is-size-3 ">
						        ¿No tienes una cuenta? &nbsp; 
						        <Link to="/signup" style={{color: '#171717'}}>Regístrate</Link>
						    </h2>

						</div>
					</div>
				</div>
	  			</div>
	  		);
	  	}else{
	  		let {id_usuario} = this.props.user;
			let mensajes = _.toArray(this.props.mensajes);
			this.state.socket.emit('asociar_id', { id_usuario });
	  		return(
			    <div className="columns">
			    	<div className="user-list column is-3-desktop is-2-tablet is-3-widescreen is-offset-2-desktop is-offset-1-tablet is-offset-2-widescreen">
			    	</div>
			    	<div className="column is-5-desktop is-6-tablet is-5-widescreen is-12-mobile">
			    		<div>
			    		<div className="title">
				    	Soporte
				    	</div>
			  			<div>
			  			<br/>
			  				{this.renderListMensajes()}
			  			</div>
			  			<br/>
			  			<hr />
			  			<div className="level">
				          <div className="level-item">
				          	<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				          	<Field name="mensaje" component={this.renderTextField} label={""} />
				            <button className="button is-primary" id="inbox" onSubmit={this.deleteContent()}>
				                Submit
				            </button>
				          </form>
				          </div>
			  			</div>
				    </div>
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
