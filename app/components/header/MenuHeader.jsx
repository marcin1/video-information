import React from 'react';
import { Link } from 'react-router'

export default () => {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menuNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="menuNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Video records list</Link></li>
                        <li><Link to="/record-edit" activeClassName="active">Create new record</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}