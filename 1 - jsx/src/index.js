import React from 'react';
import ReactDOM from 'react-dom';

function getLabel() {
    return 'Enter name here:';
}

const App = () => {
    const button = 'Click me!';
    const style = { backgroundColor: 'blue',  color: 'white' };
    return (
        <div>
            <label className="label" htmlFor="name">
                {getLabel()}
            </label>
            <input  id="name" type="text"/>
            {/*<button style={{ backgroundColor: 'blue',  color: 'white' }}>*/}
            <button style={style}>
                {button}
            </button>
        </div>
    );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
