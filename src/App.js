import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id = Math.random(); // just arbitary id number
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({ ninjas: ninjas })
  }

  deleteNinja = (id) => {
    // console.log(id)
    let ninjas = this.state.ninjas.filter(ninja => { return ninja.id !== id }) //non-destructive filtering of array data in state.
    this.setState({ ninjas: ninjas })
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  
  render() {
    return (
      <div className="App">
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
