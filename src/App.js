import React, { Component } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    currCcore: 0,
    topScore: 0
  };

  render() {
    return (
      <div>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
