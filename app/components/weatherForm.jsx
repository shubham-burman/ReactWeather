import React from "react";

export class WeatherForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" ref="place"/>
                <button className="expanded button hollow">Get Weather</button>
            </form>
        )
    }

    onFormSubmit(e){
        e.preventDefault();
        let location = this.refs.place.value;
        if (location.length > 0) {
            this.refs.place.value = '';
            this.props.onSearch(location);
        }
    }
}
