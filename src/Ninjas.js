import React from 'react';
import './Ninjas.css';

const Ninjas = ( {ninjas, deleteNinja} ) => {
  return(
    <div className="ninja-list">
    {
      ninjas.map(ninja => {
        return ninja.age >  20 ? (
          <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          {/* use fat arrow function in order to prevent automatic firing of deleteNinja function */}
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
          </div>
        ) : null;
      })
    }
    </div>
  )
}

export default Ninjas;
