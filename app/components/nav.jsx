import React from "react";
import {Link} from "react-router";


export class Nav extends React.Component{
    render() {
        return (
            <div>
                Nav Component
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        )
    }
}