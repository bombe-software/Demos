import Navbar from "./generics/navbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Doughnut} from 'react-chartjs-2';

class LandingPage extends Component {

  renderSignUp(){
    if(JSON.stringify(this.props.user) == '{}'){
        return(
            <Link to="/login">
              <button className="button button-large is-primary">
                Únete a Demos
              </button>
            </Link>
        );
    }
  }

  render() {

    let data = {
  		labels: [
  			'Jesús Medina',
  			'Mariana Benítez',
  			'Juan Pérez'
  		],
  		datasets: [{
  			data: [300, 50, 100],
  			backgroundColor: [
          'rgba(69, 196, 158, 0.9)',
          'rgba(115, 86, 201, 0.9)',
          'rgba(234, 83, 136, 0.9)'
  			],
  			hoverBackgroundColor: [
          'rgba(69, 196, 158, 1)',
          'rgba(115, 86, 201, 1)',
          'rgba(234, 83, 136, 1)'
  			]
  		}]
  	};

    return (
      <div>


      			<div className="hero is-medium is-dark">
      			<div className="hero-image img-1">

        		<div className="hero-body">
        			<div className="container">
    					<p className="is-size-1">Bienvenido a Demos</p>
    					<p className="subtitle">Decide por quien votar informándote de las propuestas y el historial de cada político</p>
              {this.renderSignUp()}
              </div>
        		</div>

      		</div>
      		</div>


          <div className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column has-text-left">
                    <p className="is-size-1">Un pueblo tiene al líder que merece...</p>
                    <p className="is-size-5">
                    Demos fue creado para informar con datos proporcionados
                    por la misma población a través de <strong>crowdsourcing</strong>,
                    que nos permite recaudar la mayor cantidad de información y filtrar
                    la que no es relevante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="hero is-small is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column has-text-centered">
                  <p className="is-size-1">Investiga a fondo a cada político</p>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="container">
              <div className="columns is-mobile">
                <div className="column is-2 is-2-mobile is-offset-5 is-offset-5-mobile has-text-centered">
                  <div className="image is-128x128">
                  <img className="is-64x64" src="../assets/img/politician.png" alt="Político" />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="container">
              <div className="columns">

                <div className="column is-4 has-text-centered">
                  <p className="is-size-2">Propuestas</p>

                  <p className="is-size-5">
                    Enlista todos las propuestas que el político ha realizado
                    durante su campaña
                  </p>
                </div>

                <div className="column is-4 has-text-centered">
                  <p className="is-size-2">Historial</p>

                  <p className="is-size-5">
                    Navega a través de una línea del tiempo que recuenta
                    todos los hechos y eventos importantes de la carrera
                    del político
                  </p>
                </div>

                <div className="column is-4 has-text-centered">
                  <p className="is-size-2">Perfil</p>

                  <p className="is-size-5">
                    Visualiza los datos más importantes del político, como su nombre y
                    partido
                  </p>
                </div>

              </div>
            </div>
            <br /><br />
          </div>
          </div>


          <div className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-desktop">
                <div className="column is-4-desktop is-12-tablet">
                  <p className="is-size-1">Estadísticas en tiempo real</p>
                  <hr/>
                  <p className="is-size-4">
                    Visualiza los datos de las encuestas realizadas por la
                    comunidad y brinda anónimamente tu opinión
                  </p>
                </div>
                <br /><br /><br />
                <div className="column is-8-desktop is-12-tablet">
                  <Doughnut data={data} />
                </div>
              </div>
            </div>
          </div>
          </div>

      		<div className="hero is-light">
      			<div className="hero-body">
      				<div className="container">

      				<div className="columns is-desktop">
        				<div className="column">
        					<h1 className="is-size-2">Accede a nuestros servicios</h1>
        					<hr />
        				</div>
        			</div>

        			<div className="columns is-desktop">

        				<div className="column is-12-tablet is-4-desktop">
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


        				<div className="column is-12-tablet is-4-desktop">
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

        				<div className="column is-12-tablet is-4-desktop">
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
