import React, {Component} from 'react';

class Ayuda extends Component{

 constructor(props) {
    super(props);
    this.state = { type: 'InicioR'};
    this.updateInicioR = this.updateInicioR.bind(this);
    this.updatePeticion = this.updatePeticion.bind(this);
    this.updateInfoUsu = this.updateInfoUsu.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.updateModer = this.updateModer.bind(this);
    this.updateEstad = this.updateEstad.bind(this);
    this.update = this.update.bind(this);
  }
  renderInicioR() {
    return (
      <div>
			
      </div>
    );
  }

    renderPeticion() {
    return (
      <div>
			hola2
      </div>
    );
  }

    renderInfoUsu() {
    return (
      <div>
			hola3
      </div>
    );
  }

    renderAdmin() {
    return (
      <div>
			hola4
      </div>
    );
  }

	  renderModer() {
	    return (
	      <div>
	         hola5
	      </div>
	    );
	  }

	    renderEstad() {
	    return (
	      <div>
	         hola6 
	      </div>
	    );
	  }
  
  updateInicioR() {
    this.setState({ type: 'InicioR' });
  }
  updatePeticion() {
    this.setState({ type: 'Peticion' });
  }
  updateInfoUsu() {
    this.setState({ type: 'InfoUsu' });
  }
  updateAdmin() {
    this.setState({ type: 'Admin' });
  }
  updateModer() {
    this.setState({ type: 'Moder' });
  }
   updateEstad() {
    this.setState({ type: 'Estad' });
  }

  update() {
    let type = this.state.type;
    if (type == "InicioR") {
      return (
        <div>
          {this.renderInicioR()}
        </div>
      );
    } else if (type == "Peticion") {
      return (
        <div>
          {this.renderPeticion()}
        </div>
      );
    } else if (type == "InfoUsu") {
      return (
        <div>
          {this.renderInfoUsu()}
        </div>
      );
    } else if (type == "Admin") {
      return (
        <div>
          {this.renderAdmin()}
        </div>
      );
    } else if (type == "Moder") {
      return (
        <div>
          {this.renderModer()}
        </div>
      );
    } else if (type == "Estad") {
      return (
        <div>
          {this.renderEstad()}
        </div>
      );
    }
  }
    
  

  render() {
    return (
      <div className="container">
      <div className="level"></div>
        <div className="columns is-desktop">
          <div className="column is-8-widescreen is-10-desktop is-10-tablet is-10-mobile is-offset-1-mobile is-offset-1-tablet is-offset-1-desktop is-offset-2-widescreen">
              
                  <ul>
                    <li className={this.state.type=="InicioR" ? 'is-active' : ''}>
                      <a onClick={this.updateInicioR}>Inicio y Registro</a>
                    </li>
                    <li className={this.state.type=="Peticion" ? 'is-active' : ''}>
                      <a onClick={this.updatePeticion}>Peticiones del Usuario</a>
                    </li>
                    <li className={this.state.type=="InfoUsu" ? 'is-active' : ''}>
                      <a onClick={this.updateInfoUsu}>Información del usuarion</a>
                    </li>
                    <li className={this.state.type=="Admin" ? 'is-active' : ''}>
                      <a onClick={this.updateAdmin}>Administrador</a>
                    </li>
                    <li className={this.state.type=="Moder" ? 'is-active' : ''}>
                      <a onClick={this.updateModer}>Moderador</a>
                    </li>
                    <li className={this.state.type=="Estad" ? 'is-active' : ''}>
                      <a onClick={this.updateEstad}>Estadisticas</a>
                    </li>
					</ul>

                <div>
                  {this.update()}
              </div>

          </div>
        </div>
        <div className="level"><br /><br /></div>
      </div>
    );
  }
}  
	
export default Ayuda;