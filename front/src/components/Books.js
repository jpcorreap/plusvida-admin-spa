import React, { Component } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import Book from "./Book";

// Second Component Protocol #2

export class Books extends Component {
  constructor(props) {
    super(props);
    // Books
    this.state = {
      title: "",
      book: [],
    };
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.categories.push(this.state);
    this.setState({
      title: "",
      book: [],
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="col-md-12 step">
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-12">
            <h3>Paso 2: subcategorías del protocolo</h3>
          </div>
          {this.props.categories ? (
            <div>
              {this.props.categories.map((item, index) => {
                return <Book key={index} data={item} />;
              })}
            </div>
          ) : (
            ""
          )}
          <div className="col-md-12">
            <div className="form-group col-md-12">
              <br />
              <br />
              <label>Agregar subcategoría</label>
              <input
                type="text"
                autoComplete="off"
                value={this.state.title}
                onChange={this.handleTitleChange}
                className="form-control"
                placeholder="Ingrese título de la subcategoría"
                required
              />
            </div>
          </div>
          <div className="form-group col-md-12">
            <div className="col-md-12">
              <button className="btn btn-control" type="submit">
                Agregar
              </button>
            </div>
          </div>
        </form>
        <div className="content-button">
          {/* <div className="data-step">
                        <h3>Step {this.props.currentStep}</h3>
                        <p>Total Steps: {this.props.totalSteps}</p>
                    </div> */}
          <div className="col-md-12">
            <div className="col-md-12">
              <button
                className="btn btn-control"
                onClick={this.props.previousStep}
              >
                <BsCaretLeftFill />
              </button>
              <button className="btn btn-control" onClick={this.props.nextStep}>
                <BsCaretRightFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
