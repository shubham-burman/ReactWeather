import React from "react";
import {Nav} from "./nav";

export class Main extends React.Component {
   /* constructor(props) {
        super(props);
    }*/
    render() {
        return (
            <div>
                <Nav/>
                <h2>
                    Main Component
                </h2>
                {this.props.children}
            </div>
        )
    }

}