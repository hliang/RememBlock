import React, { Component } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Hint from "./components/Hint";
import Footer from "./components/Footer";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const imgPools = [
  {"name": "Letters", "imgArray": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]},
  {"name": "Miss Korean", "imgArray": ["mk_0", "mk_1", "mk_10", "mk_11", "mk_12", "mk_13", "mk_14", "mk_15", "mk_16", "mk_17", "mk_2", "mk_3", "mk_4", "mk_5", "mk_6", "mk_7", "mk_8", "mk_9"]},
  {"name": "Dog Head", "imgArray": ["dh_0", "dh_1", "dh_10", "dh_11", "dh_12", "dh_13", "dh_14", "dh_15", "dh_2", "dh_3", "dh_4", "dh_5", "dh_6", "dh_7", "dh_8", "dh_9"]},
  {"name": "Fish", "imgArray": ["fish_0", "fish_1", "fish_10", "fish_11", "fish_12", "fish_13", "fish_14", "fish_15", "fish_16", "fish_17", "fish_18", "fish_19", "fish_2", "fish_3", "fish_4", "fish_5", "fish_6", "fish_7", "fish_8", "fish_9"]},
  {"name": "Lips", "imgArray": ["lips_1", "lips_10", "lips_11", "lips_12", "lips_13", "lips_14", "lips_15", "lips_16", "lips_17", "lips_18", "lips_19", "lips_2", "lips_20", "lips_3", "lips_4", "lips_5", "lips_6", "lips_7", "lips_8", "lips_9"]}
]

class App extends Component {
  state = {
    currScore: 0,
    topScore: 0,
    // Initialize blocksArr
    blocksArr: shuffle(imgPools[Math.floor(Math.random()*imgPools.length)].imgArray).slice(0, 12),
    // blocksArr: ["a", "b", "c", "d", "e"],
    alreadyClickedArr: [],
    message: "Click a block to start the game",
    showHint: false,
    shake: false,
  };


  // update score for correct guess
  correctGuess = (newItem) => {
    this.setState(prevState => {
      if (this.state.alreadyClickedArr.length === this.state.blocksArr.length - 1) {
        return ({
          currScore: 0,
          topScore: this.state.topScore + 1,
          blocksArr: shuffle(this.state.blocksArr),
          alreadyClickedArr: [],
          message: "You Win!",
          shake: false,
        });
      } else {
        return ({
          currScore: prevState.currScore + 1,
          topScore: prevState.currScore + 1 > prevState.topScore ? prevState.currScore + 1 : prevState.topScore,
          blocksArr: shuffle(prevState.blocksArr),
          alreadyClickedArr: [...prevState.alreadyClickedArr, newItem],
          message: "Good Guess",
          shake: false,
        });
      }
    });

  }

  // reset game for wrong guess
  wrongGuess = () => {
    this.setState({
      currScore: 0,
      topScore: this.state.topScore,
      blocksArr: shuffle(this.state.blocksArr),
      alreadyClickedArr: [],
      message: "You already clicked that. Game Over!",
      shake: true,
      showHint: false,
    })
  }

  // when a block is clicked
  handleBlockClick = (newItem) => {
    if (this.state.alreadyClickedArr.includes(newItem)) {
      // wrong one
      this.wrongGuess();
    } else {
      // correct one
      this.correctGuess(newItem);
    }
  }

  toggleHint = () => {
    this.setState(prevState => {
      return ({
        showHint: !prevState.showHint
      });
    });
  }

  render() {
    return (
      <div>
        {/* nav bar */}
        <Nav
          currScore={this.state.currScore}
          topScore={this.state.topScore}
          message={this.state.message}
          showHint={this.state.showHint}
        />

        {/* main content */}
        <Main
          blocksArr={this.state.blocksArr}
          shake={this.state.shake}
          callbackFromParent={this.handleBlockClick}
        />

        {/* show hint */}
        <Hint alreadyClickedArr={this.state.alreadyClickedArr} showHint={this.state.showHint} toggleHint={this.toggleHint} /> 

        {/* footer */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
