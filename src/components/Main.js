import React, { Component } from "react";

class Main extends Component {

    // list item
    blockItem(i) {
        return (
            <div key={i} name={i} className={"click-item" + (this.props.shake ? " shake" : "")} onClick={() => this.props.callbackFromParent(i)}>
                <img src={"./assets/img/" + i + ".jpeg"}  alt={i}></img>
            </div>
        );
    }

    // render function
    render() {
        return (
            <main className="container">
                {this.props.blocksArr.map( item => {return this.blockItem(item)})}
            </main>
        );
    }
}

export default Main;