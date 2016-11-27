import React from 'react';
import Header from './header';

const App = React.createClass({
   render () {
     console.log (this)
     const now = new Date();
      return (
        <div>
          <Header />
          <h1 className="text-center" >
            Hello Shubham Laad!
          </h1>
          <p>Todays time: {now.toTimeString()}</p>
        </div>
      )
   }
});

export default App;
