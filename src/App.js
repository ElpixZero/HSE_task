import React from 'react';
import Header from './components/Header/Header';
import Card from './containers/Card';
import Chart from './containers/Chart';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Card />
        <Chart />
      </div>
    );
   
  }
}

export default App;