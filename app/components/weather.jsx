import React from "react";
import {WeatherForm} from "./weatherForm";
import {WeatherMessage} from "./weatherMessage";
import OpenWeatherMap from "../api/openWeatherMap";
import * as that from "react/lib/ReactComponent";

export class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: false};
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.onSearch.bind(this)}></WeatherForm>
                {this.renderMessage()}
            </div>
        )
    }

    renderMessage() {
        if(this.state.isLoading) {
            return <h3 className="text-center">Fetching Data...</h3>
        } else if(this.state.temp && this.state.temp) {
            return  <WeatherMessage location={this.state.location} temp={this.state.temp}/>
        }
    }

    /* getInitialState() {
         return {
             location: 'New Delhi',
             temp: 30
         }
     }*/

    onSearch(location) {
        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(location).then((temp) => {
            this.setState({location, temp, isLoading: false});
        }, (err) => {
            alert(err);
            this.setState({isLoading: false});
        });
        /* this.setState(
             {
                 location,
                 temp: 40
             }
         )*/
    }
}