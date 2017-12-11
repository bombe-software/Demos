import React, { Component } from 'react';

class AnimatedBackground extends Component{

  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }
  
  render(){
    return (
      <div className="ocean"><div className="animated-background"></div></div>
    )
  }
}

export default AnimatedBackground;
