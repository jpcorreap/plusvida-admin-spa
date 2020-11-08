import React, { Component } from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import Item from './Item';

// Four Component Protocol #4

export class Items extends Component {

    constructor(props) {
        super(props)

        console.log(this.props.items);
        // Items
        this.state = {
            type: '',
            category: '3',
            text: '',
            children: [],
            typeChildren: 'text',
            textChildren: ''
        }
    }

    handleTypeChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        console.log(event.target.value);
        this.setState({
            category: event.target.value
        })
    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleTypeChildrenChange = (event) => {
        this.setState({
            typeChildren: event.target.value
        })
    }

    handleTextChildrenChange = (event) => {
        this.setState({
            textChildren: event.target.value
        })
    }

    handleSubmit = (event) => {
        if (this.state.type === 'important') {
            // Type important
            this.children = {
                text: this.state.textChildren,
                type: this.state.typeChildren
            }
            this.items = {
                type: 'important',
                children: [this.children]
            }
        } else if (this.state.type === 'title') {
            // Type title
            this.items = {
                type: 'title',
                category: this.state.category,
                text: this.state.text
            }
        } else if (this.state.type === 'text') {
            // Type text
            this.items = {
                type: 'text',
                text: this.state.text
            }
        } else if (this.state.type === 'image') {
            // Type image
            this.items = {
                type: 'image',
                text: this.state.text
            }
        }
        // console.log(this.items);
        this.props.items.push(this.items);
        // console.log(this.array);

        this.setState({
            type: '',
            category: '3',
            text: '',
            children: [],
            typeChildren: 'text',
            textChildren: ''
        })

        event.preventDefault();
    }

    componentDidUpdate() {
        // console.log('Despues de actualizar');
    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="col-md-12">
                        <h3>Items</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group col-md-12">
                            <label>Tipo</label>
                            <select value={this.state.type} onChange={this.handleTypeChange} className="form-control" id="type" required >
                                <option value="">Seleccionar</option>
                                <option value="important">Important</option>
                                <option value="title">Title</option>
                                <option value="image">Image</option>
                                <option value="text">Text</option>
                            </select>
                        </div>
                        { this.state.type === 'important' ? (
                        <div className="important-div">
                            <div className="form-group col-md-12">
                                <h4>Children</h4>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group col-md-12">
                                    <label>Tipo</label>
                                    <select onChange={this.handleTypeChildrenChange} className="form-control" id="type" required >
                                        <option value="text">Text</option>
                                        <option value="bold">Bold</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <label>Texto</label>
                                    <textarea type="text" autoComplete="off" onChange={this.handleTextChildrenChange} className="form-control" placeholder="Texto" required ></textarea>
                                </div>
                            </div>
                        </div>
                        ) : '' }
                        { this.state.type === 'title' ? (
                        <div className="form-group col-md-12">
                            <label>Categoria</label>
                            <select onChange={this.handleCategoryChange} className="form-control" id="category">
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                        </div>
                        ) : '' }
                        { this.state.type !== 'important' && this.state.type !== '' ? (
                        <div className="form-group col-md-12">
                            <label>Texto</label>
                            <textarea type="text" autoComplete="off" onChange={this.handleTextChange} className="form-control" placeholder="Texto" required ></textarea>
                        </div>
                        ) : '' }
                    </div>
                    <div className="form-group col-md-12">
                        <div className="col-md-12">
                            <button className="btn btn-control" type="submit">Agregar</button>
                        </div>
                    </div>
                </form>
                { this.props.items ? (
                    <div>
                        {this.props.items.map((item, index)=>{
                            return (<Item key={index} data={item} />)
                        })}
                    </div>
                ) : '' }
            </div>
        )
    }
}

export default Items;