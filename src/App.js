import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const images =[
  {title: 1, src: 'https://via.placeholder.com/150'},
  {title: 2, src: 'https://via.placeholder.com/150'},
  {title: 3, src: 'https://via.placeholder.com/150'},
  {title: 4, src: 'https://via.placeholder.com/150'},
  {title: 5, src: 'https://via.placeholder.com/150'},
  {title: 6, src: 'https://via.placeholder.com/150'},
  {title: 7, src: 'https://via.placeholder.com/150'},
  {title: 8, src: 'https://via.placeholder.com/150'},
  {title: 9, src: 'https://via.placeholder.com/150'},
  {title: 10, src: 'https://via.placeholder.com/150'},
  {title: 11, src: 'https://via.placeholder.com/150'},
  {title: 12, src: 'https://via.placeholder.com/150'},

]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div><strong>Clicky game</strong></div>
          <div>Click an image</div>
          <div>Score: 0 | Top Score: 0</div>
        </header>
        <div>
          {images.map((image)=>{
            return  <img src={image.src} alt={image.title} onClick={
              ()=>{
                console.log(image)
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
