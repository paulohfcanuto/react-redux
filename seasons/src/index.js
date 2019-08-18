import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };
        this.getGeoLocation();
    }

    getGeoLocation() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was just updated');
    }

    render() {
        if (this.state.lat !== null && this.state.errorMessage === ''){
            return <div>Latitude: { this.state.lat }</div>
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
