import React from "react";
import {Link} from "react-router";

export class Examples extends React.Component {
    render() {
        return(
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here is the list of few example locations:</p>
                <ol>
                    <li><Link to="/?location=Delhi">New Delhi</Link></li>
                    <li><Link to="/?location=Mumbai">Mumbai</Link></li>
                    <li><Link to="/?location=Pune">Pune</Link></li>
                </ol>
            </div>

        )
    }
}