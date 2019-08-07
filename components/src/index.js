import React from 'react';
import ReacDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Hoje as 18:00 horas"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Pedro"
        timeAgo="Hoje as 11:20 horas"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Paulo"
        timeAgo="Hoje as 18:04 horas"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Hoje as 18:45 horas"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Fernando"
        timeAgo="Hoje as 08:12 horas"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReacDOM.render(<App />, document.querySelector('#root'));
