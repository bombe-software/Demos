import React, { Component } from 'react';

class WaveBackground extends Component{

  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }
  
  render(){
    return (
      <div className="ocean"><div className="wave"></div>
      <div className="wave"></div></div>
    )
  }
}

export default WaveBackground;
