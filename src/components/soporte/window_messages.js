import React, { Component } from 'react';

class WindowMessages extends Component {
	constructor(props) {
		super(props);
	}

	renderLeftMessage(mensaje) {
		return (
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

	renderRightMessage(mensaje) {
		return (
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

	renderListMessages(mensajes) {
		return _.map(mensajes, mensaje => {
			if (mensaje.id_remitente != this.props.id_local) {
				return (
					<div key={mensaje.id_mensaje}>
						{this.renderRightMessage(mensaje)}
					</div>
				);
			} else {
				return (
					<div key={mensaje.id_mensaje}>
						{this.renderLeftMessage(mensaje)}
					</div>
				);
			}
		});
	}
	componentDidCatch(error, info) {
		console.log("Error: " + error);
		console.log("Info: " + info);
	}

	render() {
		let { mensajes } = this.props;
		return (
			<div className="inbox">
				{this.renderListMessages(mensajes)}
			</div>
		)
	}
}



export default WindowMessages;