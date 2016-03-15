import React from 'react';
import {RouteHandler} from 'react-router';
import Header from './header/Header.jsx';
import VideoInformationRecords from './record-list/VideoInformationRecords.jsx';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container">
                    {this.props.children || <VideoInformationRecords/>}
                </div>
            </div>
        );
    }
}