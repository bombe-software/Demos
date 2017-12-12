//NPM packages
import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PasswordField from 'material-ui-password-field';

/**
* @class GenericForm
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* Servira como plantilla para todos los tipos de formularios que puedan existir en el sistema. 
*/
class GenericForm extends Component {
    /**
   * Permite acceder al método constructor de la clase principal
   * @constructor
   */
    constructor(props) {
        super(props);
    }
  /**
  * Realiza el renderizado de un campo de texto
  * @returns Un campo de texto para un formulario
  * @method renderTextField
  */
    renderTextField({ input, label, meta: { touched, error }, ...custom }){
      return(
        <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
      );
    }
 /**
  * Realiza el renderizado de un campo de texto que sea de tipo password
  * @returns Un campo de texto de tipo de passowrd para un formulario
  * @method renderPassowrdField
  */
    renderPasswordField({ input, label, meta: { touched, error }, ...custom }){
      return(
        <PasswordField hintText={""} 
          floatingLabelText={label} 
          errorText={touched && error}
          {...input}
          {...custom}
        />
      );
    }
 /**
  * Realiza el renderizado de un checkbox
  * @returns Un check box para un formulario
  * @method renderCheckbox
  */
    renderCheckbox({ input, label }) {
      return(
        <Checkbox label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}/>
      );
    }
 /**
  * Realiza el renderizado de un RadioGroup
  * @returns Un RadioGroup para un formulario
  * @method renderRadioGroup
  */
    renderRadioGroup({ input, ...rest }){
      return(
        <RadioButtonGroup {...input} {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}/>
      );
    }
 /**
  * Realiza el renderizado de un selectField
  * @returns Un selectField para un formulario
  * @method renderTextField
  */
    renderSelectField({ input, label, meta: { touched, error }, children, ...custom }){
      return(
        <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}/>
      );
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
  /**
  * Realiza el renderizado de la aplicacion 
  * en base a la informacion anterior
  * @returns Cadena HTML para sobreescritura.
  * @method render
  */
    render(){
      return(
        <div>
          Solo para sobreescritura
        </div>
      );
    }
}

export default GenericForm;
