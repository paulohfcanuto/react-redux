import React from 'react';
import './ErrorPage.css';

const ErrorPage = props => {
    return (
        <div>
            <h1>Ops!</h1>
            <p>{ props.message }</p>
        </div>
    );
};

ErrorPage.defaultProps = {
    message: 'Algo deu errado...'
};

export default ErrorPage;
