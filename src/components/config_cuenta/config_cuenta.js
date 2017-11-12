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
        <div className="columns">
          <div className="column is-8 is-10-mobile is-offset-2 is-offset-1-mobile">
            <br />
            <div className="columns">
              <div className="column is-4 is-12-mobile">
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={"../../../assets/img/"+user.avatar+".png"} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">@{user.nombre_usuario}</p>
                    <p className="subtitle is-7">{user.email}</p>
                  </div>
                </div>
                  <div className="content">
                    {user.fecha_registro}<br />
                    {user.curp}<br />
                    {user.localidad}<br />
                    {user.puntos}<br />
                  </div>
                  </div>
                </div>
              </div>
              <div className="column is-8 is-12-mobile">
              <ConfigForm
                user={this.props.user}
              />
              </div>
            </div>
            <br /><br />
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
