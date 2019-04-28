import React, { Component } from "react";

class Hint extends Component {
    render() {
        return (
            <div className="hint">
                {this.props.alreadyClickedArr.map( item => {
                    return(
                        <span key={item} className="hint">{item}</span>
                    );
                })}
            </div>
        );
    }
}

export default Hint;