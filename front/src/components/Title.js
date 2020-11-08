import React, { Component } from "react";

// First Component Title #1

export class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  nextValidate = () => {
    this.props.protocol.title = this.state.title;
    this.props.nextStep();
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="col-md-12 step">
        <div className="form-group col-md-12">
          <div className="form-group col-md-12">
            <br />
            <h3>Paso 1: título del protocolo</h3>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-12">
            <div className="form-group col-md-12">
              <input
                type="text"
                autoComplete="off"
                onChange={this.handleTitleChange}
                className="form-control"
                id="protocol"
                placeholder="Ingrese el título del protocolo"
                required
              />
            </div>
          </div>
          <div className="content-button">
            {/* <h3>Step {this.props.currentStep}</h3>
                        <p>Total Steps: {this.props.totalSteps}</p> */}
            <div className="col-md-12">
              <div className="col-md-12">
                <button
                  className="btn btn-info"
                  disabled={this.state.title === ""}
                  onClick={this.nextValidate}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Title;
