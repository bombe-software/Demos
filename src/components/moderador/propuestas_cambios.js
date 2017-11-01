import React, { Component } from "react";
import _ from "lodash";

class PropuestasCambios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propuestaList : [
                {
                    id: 0, 
                    userOrigin: "Saul",
                    idUser: 1,
                    new: "Nueva",
                    old: "Vieja",
                    date: "14/09/17",
                    table: "Candidato",
                    bibliography : ["Wiki", "lol"]
                },
                {
                    id: 1, 
                    userOrigin: "Anguiano",
                    idUser: 2,
                    new: "Nueva",
                    old: "Vieja",
                    date: "14/09/17",
                    table: "Candidato",
                    bibliography : ["Wiki", "lol"]
                },
                {
                    id: 2, 
                    userOrigin: "Jaiba",
                    idUser: 3,
                    new: "Nueva",
                    old: "Vieja",
                    date: "14/09/17",
                    table: "Candidato",
                    bibliography : ["Wiki", "lol"]
                }
            ],
            propuestaActive : 0
        };
        this.renderPropuestaList = this.renderPropuestaList.bind(this);
        this.updatePropuestaActive = this.updatePropuestaActive.bind(this);
    }

    updatePropuestaActive(int){
        return(()=>{
            this.setState({ propuestaActive : int });
        });
    }

    renderPropuestaList() {
        return _.map(this.state.propuestaList, propuestaItem => {
            if(this.state.propuestaList[this.state.propuestaActive] == propuestaItem){
                return (
                    <div key={propuestaItem.id+propuestaItem.idUser}>
                        Propuesta hecha en {propuestaItem.table}
                        <div>
                            Info. anterior
                            <a className = "button is-success is-inverted">Aprobar</a>
                        </div>
                        <div>
                            Info. nueva
                            <a className = "button is-success is-inverted">Aprobar</a>
                        </div>
                    </div>
                  );
            }else{
                return (
                    <div key={propuestaItem.id+propuestaItem.idUser}>
                        <a onClick={this.updatePropuestaActive(propuestaItem.id)}>
                            Propuesta hecha en {propuestaItem.table}
                        </a>
                    </div>
                );
            }
        });
      }
    renderPropuestaDetail() {
        let propuesta = this.state.propuestaList[this.state.propuestaActive];
          return (
            <div>
                {propuesta.idUser}<br />
                {propuesta.userOrigin}<br />
                {propuesta.date}<br />
                {propuesta.new}<br />
                {propuesta.old}<br />
                {propuesta.bibliography}<br />
            </div>
          );
      }

    render() {
        return (
            <div>
                <div>
                    {this.renderPropuestaList()}
                </div>
                <div>
                    {this.renderPropuestaDetail()}
                </div>
            </div>
        )
    }
}

export default PropuestasCambios;