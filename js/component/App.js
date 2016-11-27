import React from 'react';
import Header from './header';

const App = React.createClass({
   render () {
     console.log (this);
      return (
        <div>
          <Header />
          <h1 className="text-center" >
            Hello Shubham Laad!
          </h1>
        </div>
      )
   }
});

export default App;
