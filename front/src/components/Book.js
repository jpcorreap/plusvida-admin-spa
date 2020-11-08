import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { BsPlusSquare } from "react-icons/bs";
import Items from "./Items";

// Three Component Protocol #3

export class Book extends Component {
  constructor(props) {
    super(props);
    // Modal state
    this.state = {
      open: false,
    };
  }

  openModal = () => {
    this.setState({
      open: true,
    });
  };

  closeModal = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    let data = this.props.data;
    return (
      <div className="col-md-12">
        <div className="col-md-12">
          <div
            className="content-book"
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <p className="book-title">{data.title}</p>
            <button className="btn btn-plus" onClick={this.openModal}>
              <BsPlusSquare /> Agregar ítems a la subcategoría
            </button>
          </div>
          <Modal isOpen={this.state.open}>
            <ModalHeader>{data.title}</ModalHeader>
            <ModalBody>
              <Items items={data.book} />
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-default" onClick={this.closeModal}>
                Cerrar
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Book;
