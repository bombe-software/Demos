import React, { Component } from "react";

class Administrador extends Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }

  render() {
    return (
      <div>
        Administrador
      </div>
    )
  }
}

export default Administrador;
