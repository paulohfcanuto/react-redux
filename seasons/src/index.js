import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        this.getGeoLocation();
    }

    componentDidUpdate() {
        console.log('The componentDidUpdate() method was called');
    }

    getGeoLocation() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.lat !== null && this.state.errorMessage === ''){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if (this.state.lat === null && this.state.errorMessage !== ''){
            return <div>Erro: { this.state.errorMessage }</div>
        }
        return <div>Carregando....</div>
    }
}

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);
