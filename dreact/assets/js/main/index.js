import React, {Component} from 'react';
import { Link } from 'react-router';
import main from './main.css';

class Main extends Component {
    render(){
        return(
            <div>
                <h1>Red Weather</h1>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="#" className="navbar-brand">Fantastic Weather</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/graphs" activeClassName={main.active}>
                                        Graphs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/tables" activeClassName={main.active}>
                                        Tables
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main