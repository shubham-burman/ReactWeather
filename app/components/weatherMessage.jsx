import React from "react";

export class WeatherMessage extends React.Component{
    render() {
        return (
            <div>
                <h3 className="text-center">Temperature in {this.props.location} is {this.props.temp} celsius</h3>
            </div>
        )
    }
}