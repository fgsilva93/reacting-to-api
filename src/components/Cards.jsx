import React, { Component } from 'react'
// import { Card } from 'react-bootstraps';

export class Cards extends Component {
    render() {
        return (
                <div key={this.props.film.id}>
                    <div className="card-header mt-5 mb-5">
                    <h1>{this.props.film.title}</h1>
                    <h4>{this.props.film.producer}</h4>
                    <p>{this.props.film.description}</p>
                    </div>
                </div>
        )
    }
}


export default Cards
