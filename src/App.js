import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects:[
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        Project Manager App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
