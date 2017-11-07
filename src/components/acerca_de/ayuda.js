import React, {Component} from 'react';

class Ayuda extends Component{

 constructor(props) {
    super(props);
    this.state = { type: 'InicioR'};
    this.updateInicioR = this.updateInicioR.bind(this);
    this.updatePeticion = this.updatePeticion.bind(this);
    this.updateInfoUsu = this.updateInfoUsu.bind(this);
    this.updateModer = this.updateModer.bind(this);
    this.updateEstad = this.updateEstad.bind(this);
    this.update = this.update.bind(this);
  }
  renderInicioR() {
    return (
      <div>
         <div>
         Inicio <br/>
         Aquí, usted podrá acceder totalmente al sistema, solamente necesita ingresar su correo electrónico y su contraseña con el que se registró, en caso de olvidar su contraseña, puede pasar a “Recuperar Contraseña”, a un lado del botón de inicio
         </div>
         <div>
         Registro <br/>
         En este apartado, usted puede crear una cuenta en nuestro sistema, usted podrá participar en las estadísticas del sistema, solamente ingrese sus datos que se le piden, y a continuación, recibirá un correo para confirmar su identidad, después de esto, usted podrá disfrutar de su cuenta Demos.
         </div>
         <div>
         Recuperar Contraseña <br/>
         Si usted olvidó su contraseña, simplemente ingrese el correo con el que se registró, para recibir un correo con su contraseña.
         </div>
      </div>
    );
  }

    renderPeticion() {
    return (
      <div>
         <div>
        Solcitud de Moderador <br/>
        En caso de que usted sea activo en el sistema, podrá obtener una mejor cuenta, con mejores accesos, solamente ingrese a este apartado y seleccione “Solicitud Moderador”, a continuación, ingrese el motivo por el que quiere ser Moderador (Un moderador se encarga de que realicen cambios y se maneje bien el sistema)
         </div>
         <div>
         Peticiones de Cambio <br />
         Si usted encontró información desactualizada o falsa en el sistema, en este apartado puede realizar un aviso para que se cambie esa información, solamente ingrese la información que se le pide, y a continuación, mande su solicitud, será enviada a los moderadores, quienes revisarán su solicitud.
         </div>

      </div>
    );
  }

    renderInfoUsu() {
    return (
      <div>
         <div>
         Configuración de la cuenta <br/>
         En este apartado, usted podrá administrar opciones de su cuenta, solamente seleccione el elemento que desee cambiar, se le mostrará una pantalla, en donde le preguntaremos su nuevo cambio y si confirma los cambios.
         </div>
         <div>
         Perfil de Usuario <br />
         Usted encontrará los datos públicos (Nombre de usuario y fecha de ingreso, etc.) que usted ingresó en el sistema.
         </div>
      </div>
    );
  }

    renderModer() {
      return (
        <div>
        Moderador <br />
        Si usted es  Moderador, podrá administrar las solicitudes de cambio de información que realizan, se le mostrará una lista con las solicitudes disponibles, podrá seleccionar una, al hacerlo se le mostrará detalles de esa solicitud, y podrá aceptarla o rechazarla.
        </div>
      );
    }

      renderEstad() {
      return (
        <div>
           <div>
           Elecciones <br/>
           En este apartado, podrá ver las estadísticas de las elecciones actuales (resultados de encuestas del sistema).
           </div>
           <div>
           Gubernatura <br/>
           En este apartado, podrá ver las estadísticas del mandato del político ganador actual (resultados de encuestas del sistema).
           </div>
           <div>
           Encuesta <br />
           En este apartado, usted podrá contestar encuestas, las cuales nos ayudan a realizar estadísticas para nuestro sistema, realizarlas de la mejor manera, significa mucho para nosotros.
           </div>
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