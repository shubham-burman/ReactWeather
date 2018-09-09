import React from "react";


export class About extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center">About</h1>
                <p>This is a weather application build on React</p>
                <p>Here is the list of tools I have used: </p>
                <ul>
                    <li>
                        <a href="https://reactjs.org/">React</a>
                    </li>
                    <li>
                        <a href="https://openweathermap.org/">Open Weather Map</a>
                    </li>
                </ul>
            </div>
        )
    }
}