import React, {Component} from 'react';
import Ayuda from './ayuda.js';
import Infosis from './infosis.js';


class AcercaDe extends Component{

 constructor(props) {
    super(props);
    this.state = { type: 'infosis'};
    this.updateInfosis = this.updateInfosis.bind(this);
    this.updateAyuda = this.updateAyuda.bind(this);
    this.update = this.update.bind(this);
  }
  renderInfosis() {
    return (
        <Infosis />
    );
  }

  renderAyuda() {
    return (
      <div>
           <Ayuda />
      </div>
    );
  }

  
  updateInfosis() {
    this.setState({ type: 'infosis' });
  }
  updateAyuda() {
    this.setState({ type: 'ayuda' });
  }

  update() {
    let type = this.state.type;
    if (type == "infosis") {
      return (
        <div>
          {this.renderInfosis()}
        </div>
      );
    } else if (type == "ayuda") {
      return (
        <div>
          {this.renderAyuda()}
        </div>
      );
    }
  }
    
  

  render() {
    return (
      <div className="container">
      <div className="level"></div>
        <div className="columns is-tablet">
          <div className="column is-10-widescreen is-10-desktop is-10-tablet is-10-mobile is-offset-1-mobile is-offset-1-tablet is-offset-1-desktop is-offset-1-widescreen">
              <h1 className="is-size-2">Ayuda</h1>
              <hr />
              <Ayuda />
          </div>
        </div>
        <div className="level"><br /><br /></div>
      </div>
    );
  }
}  
	
export default AcercaDe;