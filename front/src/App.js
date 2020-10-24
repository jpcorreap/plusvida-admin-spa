import React, { Component } from 'react';
import fond from './fond.jpg';
import "./form.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={fond} className="App-fond" alt="fondo" />
        <div className="form-group col-md-12">
          <div className="div-title">
            <h1 className="App-title">Administración</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                <h2>Registro de Protocolos</h2>
              </div>
              <Form />  
          </div>  
        </div>
      </div>
    )
  }
}

export default App;
