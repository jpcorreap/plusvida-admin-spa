import React, { Component } from "react";
import ReactJson from "react-json-view";
import { BsArrowRepeat, BsCaretDownFill } from "react-icons/bs";

// Six Component Protocol #6

export class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resut: this.props.protocol,
    };
  }

  render() {
    return (
      <div className="col-md-12 step">
        <div className="col-md-12">
          <h3>Paso 3: resultado</h3>
          <br />
          <p>
            Para actualizar el resultado, dar clic a la flecha de de 'root' dos
            veces:
          </p>
          <p>
            Luego, dar clic el botón azul a la derecha de root para copiar el
            JSON resultante.
          </p>
          <p>
            El JSON copiado se puede guardar en un bloc de notas o se puede
            enviar a Juan Pablo por WhatsApp.
          </p>
          <br />
          <ReactJson src={this.state.resut} />
        </div>
        <div className="content-button">
          <div className="col-md-12">
            <div className="col-md-12">
              <button
                className="btn btn-control"
                onClick={this.props.previousStep}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
