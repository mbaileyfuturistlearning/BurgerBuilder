import React, { Component } from 'react';
import Layout from '../HOC/Layout/layout'
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
