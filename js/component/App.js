import React from 'react';
import Header from './header';

const App = React.createClass({
   render () {
     const topicList = ['html', 'react', 'css'];
      return (
        <div>
          <Header />
          <h1 className="text-center" >
            Travers the array
          </h1>
          <ul>
            {topicList.map(topic => (<li>{topic}</li>)) }
          </ul>
        </div>
      )
   }
});

export default App;
