import React from 'react';
import ReacDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Pedro" />
      <CommentDetail author="Paulo" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Fernando" />
    </div>
  );
};

ReacDOM.render(<App />, document.querySelector('#root'));
