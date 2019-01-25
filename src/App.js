import React, { Component } from 'react';
import './App.css';
import images from './images.js';

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
  state = {
    array: shuffleimages(images),
    chosen: [],
    score: 0,
    highScore: 0,
    message: "Clicky Game!"
  }

  render() {
    return (
      <div className="App">
        <header>
          <div><strong>Clicky game</strong></div>
          <div>Click an image</div>
          <div>Score: {this.state.chosen.length} | Top Score: {this.state.highScore}</div>
        </header>
        <h1>{this.state.message}</h1>
        <h2>Click on an image to earn points, but don't click on the same image more than once!</h2>
        <div className="images">
          {this.state.array.map((image) => {
            return <div  className={'image'} style={{backgroundImage: "url(" + image.src + ")"}} src={image.src} key={image.id} alt={image.title} onClick={
              () => {
                console.log(image.id)
                let newChosen = this.state.chosen
                if (newChosen.indexOf(image.id) == -1) {
                  this.setState({
                    array: shuffleimages(images),
                    chosen: newChosen.concat(image.id),
                    score: this.state.score + 1,
                    highScore: this.state.score + 1 > this.state.highScore ? this.state.score + 1 : this.state.highScore,
                    message: "Keep playing!"
                  })
                } else {
                  this.setState({ array: shuffleimages(images), chosen: [], score: 0, message: "You lost! Start again." })
                }
              }
            } />
          })}
        </div>

      </div>
    );
  }
}

export default App;
