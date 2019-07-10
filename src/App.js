import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Board } from 'pages';
import { HeaderContainer, LeftMenuContainer } from 'containers/Base';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <LeftMenuContainer/>
        <Route exact path="/" component={Home}/>
        <Route path="/board" component={Board}/>
      </div>
    );
  }
}

export default App;
