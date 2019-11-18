import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {

    state = { images: []};

    // onSearchSubmit = (term) => {
    //     unsplash.get(`https://api.unsplash.com/search/photos?query=${term}`, {
    //         //params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID edc97bcffa4097f5872b6d660bb539351c53e9a19a92ccaeebee389080074b24'
    //         }
    //     }).then(response => console.log(response));
    // };


    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState( {images: response.data.results});
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;
