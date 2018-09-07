import React from "react";

export class WeatherMessage extends React.Component{
    render() {
        return (
            <div>
                <h2>Temperature in {this.props.location} is {this.props.temp}</h2>
            </div>
        )
    }
}