import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
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

export default CommentDetail;
