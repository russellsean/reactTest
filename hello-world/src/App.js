import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.name = "Sean";
  }
  
  render() {
    return (
      <div>
        <p>
          <h2>it's {this.name}!</h2>
        </p>
        <button className="btn btn-primary">Press the btn</button>
      </div>
    );
  }
}

export default App;
