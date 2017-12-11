import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isUserSelected: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderNavEnd = this.renderNavEnd.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleClickUser(){
    this.setState(prevState => ({
      isUserSelected: !prevState.isUserSelected
    }));
  }

  renderNavEnd(){
    if(JSON.stringify(this.props.user) == '{}'){
      return(

        <div>
          <div className="navbar-item">
            <Link to="/login" className="navbar-item is-light" onClick={this.handleClick}>
              Iniciar sesión
            </Link>

            <Link to="/signup" className="navbar-item" onClick={this.handleClick}>
              Registro
            </Link >

          </div>
        </div>
      );
    }else{
      return(
          <div>
          <div className="navbar-item">
            <div className="field is-grouped">
              <div className="navbar-item is-light has-dropdown is-hoverable" onClick={this.handleClick}>
                <a className="navbar-item">@{this.props.user.nombre_usuario}</a>
                <div className="navbar-dropdown is-right">
                  <Link to="/config_cuenta" className="navbar-item">Configuración de la cuenta</Link>
                  <a className="navbar-item" href="/">Cerrar sesión</a>
                </div>
              </div>
              <div className="navbar-item">
                  <img src={"../../assets/img/"+this.props.user.avatar+".png"} height="28" width="28"/>
                </div>
            </div>
          </div>
          </div>
      );
    }
  }
  renderModerador(){
    if(JSON.stringify(this.props.user) != '{}'){
      if(this.props.user.id_tipo_usuario == '2'){
        return(
            <Link to="/moderador" className="navbar-item">
              Moderador
            </Link>
        );
      }
    }
  }

  /**
  * Es una forma de capturar cualquier error en la clase 
  * y que este no crashe el programa, ayuda con la depuracion
  * de errores
  * @method componentDidCatch
  * @const info Es más informacion acerca del error
  * @const error Es el titulo del error
  */
  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }

  render() {
    return (
      //Logo de la navbar
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="../../assets/img/demos_logo_21.png" alt="Demos" width="112" height="28"/>
            </Link>

            <div className={this.state.isToggleOn ? 'navbar-burger burger is-active' : 'navbar-burger burger'} data-target="nav-demos-menu" onClick={this.handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="nav-demos-menu" className={this.state.isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">

              <div className="navbar-item">

                  <Link to="/elecciones" className="navbar-item" onClick={this.handleClick}>
                    Elecciones
                  </Link>
                  <Link to="/politicos" className="navbar-item" onClick={this.handleClick}>
                    Politicos
                  </Link>
                  <Link to="/acerca-de" className="navbar-item" onClick={this.handleClick}>
                    Ayuda
                  </Link>
                  <Link to="/soporte" className="navbar-item" onClick={this.handleClick}>
                    Soporte
                  </Link>
                  {this.renderModerador()}
              </div>

            </div>
            <div className="navbar-end">
            {this.renderNavEnd()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps,  null )(Navbar);
