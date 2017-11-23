import Navbar from "./generics/navbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Doughnut} from 'react-chartjs-2';

class LandingPage extends Component {
  render() {
  	
    return (
      <div>

      		
      			<div className="hero is-medium is-dark">
      			<div className="hero-image img-1">
     
        		<div className="hero-body">
        			<div className="container">
    					<p className="is-size-1">Bienvenido a Demos</p>
    					<p className="subtitle">Decide por quien votar informándote de las propuestas y el historial de cada político</p>
        			</div>
        		</div>
	        	
      		</div>
      		</div>

      		<div className="hero is-light">
      			<div className="hero-body">
      				<div className="container">

      				<div className="columns">
        				<div className="column">
        					<h1 className="is-size-2">Accede a nuestros servicios</h1>
        					<hr />
        				</div>
        			</div>

        			<div className="columns">

        				<div className="column">
	        				<Link to="/elecciones">
	        					<div className="card hover-hero">
			        				<div className="hero is-primary hover-hero">
						        		<div className="hero-body">
						        			<h2 className="title">Elecciones</h2>
						        			<p className="subtitle">Consulta la posición de los candidatos de tu interés</p>
						        		</div>
						        	</div>
	        					</div>
	        				</Link>
        				</div>


        				<div className="column">
        				<Link to="/politicos">
	        				<div className="card hover-hero">
		        				<div className="hero is-info hover-hero">
					        		<div className="hero-body">
					        			<h2 className="title">Políticos</h2>
					        			<p className="subtitle">Consulta las propuestas e historial de candidatos</p>
					        		</div>
					        	</div>
        					</div>
        				</Link>
        				</div>

        				<div className="column">
        				<Link to="/soporte">
	        				<div className="card hover-hero">
		        				<div className="hero is-danger hover-hero">
					        		<div className="hero-body">
					        			<h2 className="title">Soporte</h2>
					        			<p className="subtitle">Obtén ayuda de algún administrador del programa</p>
					        		</div>
					        	</div>
        					</div>
        				</Link>
        				</div>

        			</div>

      				</div>
      			</div>
      		</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps,  null )(LandingPage);