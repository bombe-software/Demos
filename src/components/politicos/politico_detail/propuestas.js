import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPropuestas, putIsliked, fetchIsliked, fetchCountLikes } from "../../../actions";

class Propuestas extends Component {
    constructor(props) {
        super(props);
        this.renderPropuestaList = this.renderPropuestaList.bind(this);
        this.renderLike = this.renderLike.bind(this);
    }

    componentDidMount(){
        this.props.fetchPropuestas(this.props.id_politico);
        if(JSON.stringify(this.props.user) != '{}'){
            this.props.fetchIsliked(this.props.user.id_usuario);
            this.props.fetchCountLikes();
        }
    }

    renderLike(user, propuestas_like, propuesta){
        let propuesta_like = _.filter(propuestas_like, {'id_propuesta': propuesta.id_propuesta});
        let isLiked = false;
        let count_actual = undefined;
        if (_.filter(this.props.count, {'id_propuesta': propuesta.id_propuesta})[0] != undefined){
            count_actual = _.filter(this.props.count, {'id_propuesta': propuesta.id_propuesta})[0].count;
        }
        if(propuesta_like[0] != undefined){
            isLiked = true;
        }
        return(
            <div>
                {count_actual}
                <a onClick={()=>{this.props.putIsliked(propuesta.id_propuesta, user.id_usuario); this.props.fetchCountLikes(propuesta.id_propuesta); this.props.fetchIsliked(user.id_usuario);}}>
                    <i className={isLiked==true ? "fa fa-thumbs-up": "fa fa-thumbs-o-up"} aria-hidden="true"></i>
                </a>
            </div>
        );
    }



    renderPropuestaList() {
        let {tipo} = this.props.politico_bio;
        const {user, propuestas_like}  = this.props;
        const {renderLike} = this;
        return _.map(this.props.propuestas, propuesta => {
            return (
                <div key={propuesta.id_propuesta}>
                    <div className="box">

                      <p className="is-size-5">
                          <a className="has-text-dark">{propuesta.nombre}</a> &nbsp;{" "}&nbsp;<span className="is-size-7 tag is has-text-right">{propuesta.categoria}</span>
                      </p>
                          <div className={tipo!="Funcionario" ? "hidden" : ""}>
                          {user != undefined  && propuestas_like != undefined ?
                              renderLike(user, propuestas_like, propuesta)
                           : console.log('vacio')}
                          </div>
                    </div>
                    <div className="level"></div>
                </div>
            );
        });
    }



    render() {
        if(this.props.propuestas != undefined){
            return (
                <div>
                  <div className="level">
                    <div className="level-left"></div>
                    <div className="level-right">
                      <div className="level-item">
                        <p className="has-text-right">
                          <Link to={"/crear/propuestas/"+this.props.id_politico} className="button is-success">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            &nbsp;&nbsp;&nbsp;Agregar una propuesta
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                    {this.renderPropuestaList()}
                </div>
            );
        }else{
            return(
                    <div className="spinner">
                    </div>
            );
        }
    }
}


function mapStateToProps(state) {
    return {
        propuestas: state.politico.propuestas,
        propuestas_like: state.politico.propuestas_like,
        user: state.user,
        count: state.politico.propuesta_count
    };
}

export default connect(mapStateToProps, { fetchPropuestas, putIsliked, fetchIsliked, fetchCountLikes })(Propuestas);
