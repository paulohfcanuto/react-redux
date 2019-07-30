import React from 'react';
import ReacDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date"> Hoje as 18:00 horas</span>
          </div>
          <div className="text">I want do BLOOG for them!</div>
        </div>
      </div>
    </div>
  );
};

ReacDOM.render(<App />, document.querySelector('#root'));
