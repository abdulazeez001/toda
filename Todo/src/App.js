import React from 'react';
import Products from './Products.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header ><h1>Todo App</h1></header>
        <section>
          <Products ></Products>
        </section>
      </div>
    );
  }
} 

export default App;