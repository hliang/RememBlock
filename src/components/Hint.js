import React, { Component } from "react";

class Hint extends Component {
    render() {
        return (
            <div className="hintwrapper">
                <span id="toglehint" className="hint" onClick={this.props.toggleHint}>Hint: {this.props.showHint ? "" : "OFF"}</span>
                <div className={this.props.showHint?"":"hidden"}>
                {this.props.alreadyClickedArr.map( item => {
                    return(
                        <span key={item} className="hint">{item}</span>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default Hint;