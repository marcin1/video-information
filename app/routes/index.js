import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom'
import App from '../components/App.jsx';
import VideoInformationRecords from '../components/record-list/VideoInformationRecords.jsx';
import ViewRecord from '../components/record/ViewRecord.jsx';
import EditRecord from '../components/record/EditRecord.jsx';
import CreateRecord from '../components/record/CreateRecord.jsx';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={VideoInformationRecords}/>
            <Route path="/view/:id" component={ViewRecord} />
            <Route path="/view/:id/:modified" component={ViewRecord} />
            <Route path="/edit/:id" component={EditRecord} />
            <Route path="/create" component={CreateRecord} />
        </Route>
    </Router>
), document.getElementById("app"));