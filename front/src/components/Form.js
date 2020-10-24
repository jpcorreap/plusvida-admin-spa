import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Protocol from './Protocol';

export class Form extends Component {

    constructor(props) {
        super(props)

        console.log('constructor');
        // Modelo Protocolo
        this.state = {
            title: '',
            typeBook: ''
        }
        this.subcategories = {
            books: []
        }
        // Books
        this.titleBook = '';
        this.books = {
            title: '',
            items: []
        }
        // Items
        // Type important
        this.itemsImportant = {
            type: 'important',
            children: []
        }
        this.children = {
            text: '',
            type: ''
        }
        // Type title
        this.itemsTitle = {
            type: 'title',
            category: '',
            text: ''
        }
        // Type image
        this.itemsImage = {
            type: 'image',
            text: ''
        }
        // Type text
        this.itemsText = {
            type: 'text',
            text: ''
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleTitleBookChange = (event) => {
        this.titleBook = event.target.value;
    }

    handleTypeBookChange = (event) => {
        this.setState({
            typeBook: event.target.value
        })
        // this.state.typeBook = event.target.value;
        // console.log(this.typeBook);
    }

    handleSubmit = (event) => {
        console.log('Submit');
        this.books.title = this.titleBook;
        this.subcategories.books.push(this.books);
        console.log(JSON.stringify(this.subcategories));



        // this.setState({
        //     subcategories: this.subcategories
        // })
        // console.log(JSON.stringify(this.state));
        // console.log(this.state);
        event.preventDefault()
    }

    componentDidMount() {
        console.log('Se carga solo una ves ya terminado de cargar.');
    }

    componentDidUpdate() {
        console.log('Despues de actualizar');
    }

    render() {
        
        console.log(this.typeBook);
        this.protocol = '{ "title": "' + this.state.title + '",' + 
        '"subcategories": [{ }]';

        return (
            <div className="col-md-12">
                <div className="col-md-6">
                    <div className="form-group col-md-12">
                        <label for="protocol">Protocolo</label>
                        <input type="text" autoComplete="off" value={this.state.title} onChange={this.handleTitleChange} className="form-control" id="protocol" aria-describedby="protocolHelp" placeholder="Título del Protocolo" required />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group col-md-12">
                            <h3>SubCategorias</h3>
                        </div>
                        <div className="form-group col-md-12">
                            <label for="protocol">Title</label>
                            <input type="text" autoComplete="off" onChange={this.handleTitleBookChange} className="form-control" id="book" aria-describedby="booklHelp" placeholder="Título" required />
                        </div>
                        <div className="form-group col-md-12">
                            <h4>Book</h4>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="type">Tipo</label>
                            <select value={this.state.typeBook} onChange={this.handleTypeBookChange} class="form-control" id="type" required >
                                <option value="">Seleccionar</option>
                                <option value="important">Important</option>
                                <option value="title">Title</option>
                                <option value="image">Image</option>
                                <option value="text">Text</option>
                            </select>
                        </div>
                        { this.state.typeBook === 'important' ? (
                        <div className="important-div">
                            <div className="form-group col-md-12">
                                <h4>Children</h4>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="type">Tipo</label>
                                <select class="form-control" id="type" required >
                                    <option value="text">Text</option>
                                    <option value="bold">Bold</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <label for="protocol">Texto</label>
                                <input type="text" autoComplete="off" onChange={this.handleTextChildrenChange} className="form-control" id="protocol" aria-describedby="protocolHelp" placeholder="Título del Protocolo" required />
                            </div>
                        </div>
                        ) : '' }
                        { this.state.typeBook === 'title' ? (
                        <div class="form-group col-md-6">
                            <label for="type">Category</label>
                            <select class="form-control" id="category">
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                        </div>
                        ) : '' }
                        <div className="form-group col-md-12">
                            <button className="btn btn-primary" type="submit">Generar</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-12">
                    {/* <Protocol protocol={this.protocol}/> */}
                </div>
            </div>
        )
    }
}

export default Form;