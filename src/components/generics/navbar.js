import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
    this.renderNavEnd = this.renderNavEnd.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  renderNavEnd(){
    if(JSON.stringify(this.props.user) == '{}'){
      return(

        <div>
          <div className="navbar-item">
            <Link to="/login" className="navbar-item is-light">
              Iniciar sesión
            </Link>

            <Link to="/signup" className="navbar-item">
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
            <div className="navbar-item">
                <img src={"../../assets/img/"+this.props.user.avatar+".png"} height="28" width="28"/>
              </div>
              <Link to="/config_cuenta" className="navbar-item is-light">
                @{this.props.user.nombre_usuario}
              </Link>
            </div>
          </div>
          </div>
      );
    }
  }

  render() {
    return (
      //Logo de la navbar
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="../../assets/img/demos_logo_21.png" alt="Demos" width="112" height="28"/>
            </a>

            <div className="navbar-burger burger" data-target="nav-demos-menu" onClick={this.handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="nav-demos-menu" className={this.state.isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">

              <div className="navbar-item">

                  <Link to="/elecciones" className="navbar-item">
                    Elecciones
                  </Link>
                  <Link to="/politicos" className="navbar-item">
                    Politicos
                  </Link>
                  <Link to="/acerca-de" className="navbar-item">
                    Acerca de
                  </Link>
                  <Link to="/soporte" className="navbar-item">
                    Soporte
                  </Link>

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
