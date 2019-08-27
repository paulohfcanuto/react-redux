import React from 'react';
import './ErrorPage.css';

const ErrorPage = props => {
    return (
        <div className="backgroud">
            <h1 className="errorH1">Ops!</h1>
            <p className="errorP">{ props.message }</p>
        </div>
    );
};

ErrorPage.defaultProps = {
    message: 'Algo deu errado...'
};

export default ErrorPage;
