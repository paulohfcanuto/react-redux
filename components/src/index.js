import React from 'react';
import ReacDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
};

ReacDOM.render(<App />, document.querySelector('#root'));
