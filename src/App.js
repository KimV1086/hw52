import React, {Component} from 'react';
import Bingo from './components/Bingo';
import './App.css';


let arr = [];

const rand = () => {

  while (arr.length < 5) {

    const randomNum = Math.floor(Math.random() * 31 + 5);

    if (!arr.includes(randomNum)) {
      arr.push(randomNum);
      arr.sort((a, b) => a - b);
    }

  }

};
rand();

class App extends Component {

  state = {
    number: arr,
  };

  changeNumber = () => {
    arr = [];
    rand();
    this.setState({number: arr});
  };


  render() {
    return (
        <div className="App">
          <div className="block">
            <button className="btn" onClick={this.changeNumber}>New Numbers</button>
            <div className="number-box">
              {this.state.number.map((num, key) => {
                return <Bingo key={key} num={this.state.number[key]}/>
              })}
            </div>
          </div>
        </div>
    );
  }
}

export default App;

