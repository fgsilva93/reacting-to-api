import React, { Component } from 'react';
import Cards from './Cards';
import 'isomorphic-fetch';
import 'es6-promise';
// import 'bootstrap/dist/css/bootstrap.css';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoaded: false
        }
    }

    loadFilms() {
        fetch("http://ghibliapi.herokuapp.com/films")
        .then(res => res.json()) //converts to object?
        .then(films => this.setState({
            films: films,
            isLoaded: true
        }))
        .then(films => console.log(this.state))
        .catch(err => console.log(err))
    }

    render() {
        if(this.state.isLoaded) {
            return (
                <React.Fragment>
                <div>
                    {this.state.films.map(film => <Cards key= {film.id} film = {film}/>)}
                </div>
                </React.Fragment>
            )
        }
        else {
            return <button onClick={() => this.loadFilms()}>Loading</button>
        }
    }
}


export default App
