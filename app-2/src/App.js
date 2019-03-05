import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
       people: [
          "Amir",
          "Pari",
          "Jalal",
          "Sogol",
          "Ramin",
          "Ali",
          "Mari"
      ]
    }



  }



  render() {
    let peopleToDisplay = this.state.people.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
    return (
      <div className="App">
         {peopleToDisplay}
      </div>
    );
  }
}




export default App;
