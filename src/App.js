// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((astro, id) => <h1 key={id}>{astro.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(({people}) => this.setState({peopleInSpace: people}))
    }
}

export default App