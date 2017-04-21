import React from 'react';
import CommentBox from './commentBox';

const App = React.createClass({
   render () {
      return (
        <div>
          <h1 className="text-center" >
            Hello Comment app!
          </h1>
          <CommentBox />
        </div>
      )
   }
});

export default App;
