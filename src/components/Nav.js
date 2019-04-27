import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li className="brandname">
                        <a href="/">RememBlock</a>
                    </li>
                    <li className="nav-item">
                        <div>Click a block to begin!</div>
                    </li>
                    <li className="nav-item">
                        <div>Scores</div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;