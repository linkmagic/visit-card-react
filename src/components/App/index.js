import React, { Component } from 'react';

import './style.css';
import MenuBar from '../MenuBar';
import Logo from '../Logo';
import TabsEditor from '../TabsEditor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar/>
        <Logo/>
        <TabsEditor/>
      </div>
    );
  }
}

export default App;
