import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    // console.log(this.props);
    // const { name, age, belt } = this.props; //destructing
    const { ninjas } = this.props; // is same as "const ninjas = this.props.ninjas"
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja">
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
        </div>
      )
    })

    return(
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
  }
}

export default Ninjas;
