import React, { Component } from "react";

class ShowPassword extends Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'input',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }
  
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }
  
  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      var pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });      
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
  
  render(){
    return(
      <label className="password">Password
      <input className={className} type={"password"} placeholder={field.placeholder} {...field.input} />
      
      <input type={this.state.type} className="password__input" onChange={this.passwordStrength}/>
      <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
      <span className="password__strength" data-score={this.state.score} />
      </label>
    )
  }
}

export default ShowPassword;