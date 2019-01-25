import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const images =[
  {id: 1, src: 'https://via.placeholder.com/150?text=1'},
  {id: 2, src: 'https://via.placeholder.com/150?text=2'},
  {id: 3, src: 'https://via.placeholder.com/150?text=3'},
  {id: 4, src: 'https://via.placeholder.com/150?text=4'},
  {id: 5, src: 'https://via.placeholder.com/150?text=5'},
  {id: 6, src: 'https://via.placeholder.com/150?text=6'},
  {id: 7, src: 'https://via.placeholder.com/150?text=7'},
  {id: 8, src: 'https://via.placeholder.com/150?text=8'},
  {id: 9, src: 'https://via.placeholder.com/150?text=9'},
  {id: 10, src: 'https://via.placeholder.com/150?text=10'},
  {id: 11, src: 'https://via.placeholder.com/150?text=11'},
  {id: 12, src: 'https://via.placeholder.com/150?text=12'},

]
function shuffleimages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
shuffleimages(images);
let newImages = shuffleimages(images);
console.log(newImages);


class App extends Component { 
  state={
    array:shuffleimages(images),
    chosen:[],
    score: 0,
    highScore: 0,
  }
  // constructor(){  
    // this.state={
    //   array:shuffleimages(images)
    // }
  // }
  render() {
    return (
      <div className="App">
        <header>
          <div><strong>Clicky game</strong></div>
          <div>Click an image</div>
          <div>Score: {this.state.chosen.length} | Top Score: 0</div>
        </header>
        <h1>{this.state.chosen}</h1>
        <div>
          {this.state.array.map((image)=>{
            return  <img src={image.src} key={image.id} alt={image.title} onClick={
              ()=>{
                console.log(image.id)
                let newChosen = this.state.chosen
                if(newChosen.indexOf(image.id) == -1) {
                  this.setState({array:shuffleimages(images), chosen: newChosen.concat(image.id) })
                } else {
                  alert('you lost')
                }
              }
            }/>
          })}
        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
