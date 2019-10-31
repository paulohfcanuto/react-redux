import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // onInputChange = (event) => {
    //
    // }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term)
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/*<input type="text" onChange={this.onInputChange} />*/}
                        {/*<input type="text" value={this.state.term} onChange={ (e) => this.setState({ term: e.target.value.toUpperCase() })} />*/}
                        <input type="text" value={this.state.term} onChange={ (e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;