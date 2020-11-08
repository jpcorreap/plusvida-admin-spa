import React, { Component } from 'react';

// Five Component Protocol #5

export class Item extends Component {

    // constructor(props) {
    //     super(props)
    //     // Item
    // }

    render() {
        let data = this.props.data;
        return (
            <div className="col-md-12 item">
                <div className="col-md-12">
                    <h4>{data.type}</h4>
                    { data.type === 'important' ? (
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <h4>Items:</h4>
                        </div>
                        <div className="col-md-12">
                        {data.children.map((item, index)=>{
                            return (
                                <div key={index} className="col-md-12 children">
                                    <p><strong>tipo: </strong>{item.type}</p>
                                    <p><strong>Texto: </strong>{item.text}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    ) : (
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="col-md-12 children">
                                { data.type === 'title' ? (
                                    <p><strong>Categoria: </strong>{data.category}</p>
                                ) : '' }
                                <p><strong>Texto: </strong>{data.text}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Item;