import React from 'react';
import ReacDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Hoje as 18:00 horas"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <div>
          <h4>Vai dar treta!</h4>
          Tem certeza que quer fazer isso?
        </div>
      </ApprovalCard>
    </div>
  );
};

ReacDOM.render(<App />, document.querySelector('#root'));
