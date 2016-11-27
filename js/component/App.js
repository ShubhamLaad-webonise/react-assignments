import React from 'react';
import Header from './header';
import RedBlock from './redBlock';
import BlueBlock from './BlueBlock';

const App = React.createClass({
  getDefaultProps () {
    // console.log("getDefaultProps");
    return ({
      appProp: true
    });
  },

  getInitialState () {
    // console.log("getInitialState");
    return ({
      appState: true
    });
  },

  componentWillMount () {
    //console.log("componentWillMount");
    this.setState({
      appState: this.props.appProp
    })
  },

  componentDidMount () {
    // console.log("did mount");
  },
  changeBlock () {
    this.setState({
      appState: !this.state.appState
    })
  },

   render () {
     console.log (this);
      return (
        <div>
          <Header />
          <h1 className="text-center" onClick={this.changeBlock} ref="ha">
            Hello Shubham Laad!
          </h1>
          <div className="container">
            {
              (this.state.appState) ? <RedBlock /> : <BlueBlock />
            }
          </div>
        </div>
      )
   }
});

export default App;
