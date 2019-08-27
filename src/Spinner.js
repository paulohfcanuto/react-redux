import React from 'react';
import './Spinner.css';

const Spinner = props => {
    return (
        <div className="carregando">
            <div className="ui active dimmer">
                <div className="ui big text loader">{props.message}</div>
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Carregando...'
};

export default Spinner;
