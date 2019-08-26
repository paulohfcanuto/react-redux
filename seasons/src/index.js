import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';
import ErrorPage from "./ErrorPage";

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

    renderBodyContent() {
        if (this.state.lat !== null && this.state.errorMessage === ''){
            return <SeasonDisplay lat={ this.state.lat }/>
        }
        if (this.state.lat === null && this.state.errorMessage !== ''){
            return <ErrorPage message={ this.state.errorMessage }/>
        }
        return <Spinner message={ "Por favor aceite o acesso à sua localização" }/>
    }

    render() {
        // Pode ser colocado algum css ou elemento que o componente injetado não precisa conhecer....
        return (
          <div>
              { this.renderBodyContent() }
          </div>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);
