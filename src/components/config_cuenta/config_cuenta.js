import React, { Component } from "react";
import ConfigForm from './config_form';
import { connect } from "react-redux";
import NeedLogin from "./../generics/need_login";


class Perfil extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {user} = this.props;
    if(JSON.stringify(user) == '{}'){
      return(
        <div>
          <NeedLogin />
        </div>
      );
    }else{
      return (
        <div className="section">
          <div className="columns">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen is-3-fullhd is-6-fullhd is-offset-1-desktop is-offset-2-widescreen is-offset-3-fullhd">
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
          <div className="column is-7-tablet is-6-desktop is-5-widescreen is-5-fullhd">
            <ConfigForm
              user={this.props.user}
            />
          </div>
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
