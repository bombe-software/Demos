//NPM package
import React, { Component } from "react";

  /**
  @const NotFound Contiene codigo html que se desplegara en caso de que la pagina
  = a la que este intentando ingresar el usuario, ya sea inexistente, o no tenga
  * permisos para verla.
  */

const NotFound = () => (
	<div className="hero is-primary is-fullheight">
		<div className="hero-body">
			<div className="container">
				<h1 className="title has-text-centered is-size-2 is-dark" >
			        ¯\_(ツ)_/¯
			    </h1>
			    <br />
			    <h2 className="subtitle has-text-centered is-size-3 ">
			        404: Parece que la página que buscas no existe
			    </h2>

			</div>
		</div>
	</div>
);

export default NotFound;