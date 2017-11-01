import React, {Component} from 'react';
import Ayuda from './ayuda.js';
import Infosis from './infosis.js';


class AcercaDe extends Component{

 constructor(props) {
    super(props);
    this.state = { type: 'Infosis'};
    this.updateInfosis = this.updateInfosis.bind(this);
    this.updateAyuda = this.updateAyuda.bind(this);
    this.update = this.update.bind(this);
  }
  renderInfosis() {
    return (
      <div>
			<Infosis />
      </div>
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
        <div className="columns is-desktop">
          <div className="column is-8-widescreen is-10-desktop is-10-tablet is-10-mobile is-offset-1-mobile is-offset-1-tablet is-offset-1-desktop is-offset-2-widescreen">
              
                <div className="tabs">
                  <ul>
                    <li className={this.state.type=="infosis" ? 'is-active' : ''}>
                      <a onClick={this.updateInfosis}>Informacion del sistema</a>
                    </li>
                    <li className={this.state.type=="ayuda" ? 'is-active' : ''}>
                      <a onClick={this.updateAyuda}>Ayuda</a>
                    </li>
					</ul>
                </div>

                <div>
                  {this.update()}
              </div>

          </div>
        </div>
        <div className="level"><br /><br /></div>
      </div>
    );
  }
}  
	
export default AcercaDe;