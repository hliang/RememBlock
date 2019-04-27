import React, { Component } from "react";

class Main extends Component {
    imgArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

    // list item
    clickitem(i) {
        return (
            <div key={i} className="click-item">
                <img src={"/assets/img/" + i + ".jpeg"}  alt={i}></img>
            </div>
        );
    }

    // render function
    render() {
        return (
            <main className="container">
                {this.imgArr.map( item => {return this.clickitem(item)}
                )}
            </main>
        );
    }
}

export default Main;