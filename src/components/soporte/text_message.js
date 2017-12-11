import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";

import GenericForm from '../generics/form';
import { insertMensajes } from "../../actions";

class TextMessage extends GenericForm {
    constructor(props) {
        super(props);
    }

    onSubmit(values) {
        let { id_local, id_externo, handleReloadMessages } = this.props;
        this.props.insertMensajes(id_local, id_externo, values.mensaje, () => {
            handleReloadMessages();
        });

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
        const { handleSubmit } = this.props;
        return (
            <div>
                <br />
                <div className="level">
                    <div className="level-item">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field name="mensaje" component={this.renderTextField} label={""} />
                            <button className="button is-primary" id="inbox">
                                Submit
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function validate(values) {
    const errors = {};

    if (!values.mensaje) {
        errors.mensaje = " ";

    }

    return errors;
}

export default reduxForm({
    form: "mensajeForm",
    validate
})(connect(null, { insertMensajes })(TextMessage));