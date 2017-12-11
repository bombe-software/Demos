import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import reducers from "./reducers";

//Genericos
import Navbar from "./components/generics/navbar";
import Footer from "./components/generics/footer";

import LandingPage from "./components/landing_page";
import Login from "./components/login";
import SignUp from "./components/signup";
import ConfirmEmail from './components/confirm_ email';
import RecoverPass from './components/recover_pass';
import NotFound from "./components/not_found";
import AcercaDe from "./components/acerca_de/acerca_de";
import Moderador from './components/moderador/moderador';
import Politicos from './components/politicos/politicos';
import PoliticoDetail from './components/politicos/politico_detail/politico_detail';
import Administrador from './components/administrador/administrador';
import ConfigCuenta from './components/config_cuenta/config_cuenta';
import PropuestasForm from './components/politicos/politico_create/propuestas_form';
import HistorialForm from './components/politicos/politico_create/historial_form';
import PoliticoForm from './components/politicos/politico_create/politico_form';

//En actual desarrollo
import Elecciones from './components/elecciones/elecciones';
import Soporte from './components/soporte/soporte';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.hydrate(
  <div>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>         
              <Route path="/recover_pass" component={RecoverPass} />
              <Route path="/moderador" component={Moderador} />
                            <Route path="/admin" component={Administrador} />
              <Route path="/acerca-de" component={AcercaDe} />{/*Completo*/} 
              <Route path="/confirm_email" component={ConfirmEmail} />
              <Route path="/login" component={Login} />{/*Completo*/} 
              <Route path="/signup" component={SignUp} />{/*Completo*/} 
              <Route path="/config_cuenta" component={ConfigCuenta} />{/*Completo*/} 
              <Route path="/politicos" component={Politicos} />{/*Completo*/}
              <Route path="/elecciones" component={Elecciones} />
              <Route path="/soporte" component={Soporte} />


              <Route path="/politico/:id" component={PoliticoDetail} />{/*Completo*/} 
              <Route path="/crear/politico" component={PoliticoForm} />{/*Completo*/} 
              <Route path="/crear/propuestas/:id" component={PropuestasForm} />{/*Completo*/} 
              <Route path="/crear/historial/:id" component={HistorialForm} />{/*Completo*/} 


            {/*Landing page*/}
            <Route path="/" exact component={LandingPage} />
            {/*404 not found*/}
            <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    </ MuiThemeProvider>
  </Provider>
  </div>,
  document.querySelector(".root")
);
