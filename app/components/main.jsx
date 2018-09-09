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
                <div className='row'>
                    <div className="columns small-centered medium-6 large-4">
                        {this.props.children}
                    </div>
                </div>

            </div>
        )
    }

}