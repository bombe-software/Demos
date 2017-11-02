import React, { Component } from "react";
import ConfigForm from './config_form';
import { connect } from "react-redux";


class Perfil extends Component {
  constructor(props) {
    super(props);
    //Usar id para llenar el state
    console.log(this.props.id);
  }

  render() {
    let {user} = this.props;
    if(JSON.stringify(user) == '{}'){
      return(
        <div>
          Inicia sesion para acceder a este modulo
        </div>
      );
    }else{
      return (
          <div className="container">
            <div>
              {user.nombre_usuario}<br />
              <img className="image is-128x128" src={"../../../assets/img/"+user.avatar+".png"} />
              {user.avatar}<br />
              {user.email}<br />
              {user.fecha_registro}<br />
              {user.curp}<br />
              {user.localidad}<br />
              {user.puntos}<br />
            </div>
            <div>
            <ConfigForm 
              user={this.props.user}
            />
            </div>
          </div>
      ) ;
  }
    }
}
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps,  null )(Perfil);
