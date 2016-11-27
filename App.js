import React from 'react';
import Header from './js/component/header';
import RedBlock from './js/component/redBlock';
import BlueBlock from './js/component/BlueBlock';

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
