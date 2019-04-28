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

class App extends Component {
  state = {
    currScore: 0,
    topScore: 0,
    // Initialize blocksArr
    blocksArr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"],
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
