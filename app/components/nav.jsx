import React from "react";
import {IndexLink, Link} from "react-router";


export class Nav extends React.Component{
    render() {
        return (
            <div className="top-bar">
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className="menu-text"> Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>

                <div className='top-bar-right'>
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>

                    </form>
                </div>
            </div>

        )
    }

    onSearch(e) {
        e.preventDefault();
        alert('Not Wired up Yet!');
    }
}

var old = (
    <div>
        Nav Component
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
    </div>
);