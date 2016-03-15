import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom'
import App from '../components/App.jsx';
import VideoInformationRecords from '../components/record-list/VideoInformationRecords.jsx';
import VideoRecord from '../components/record/VideoRecord.jsx';
import VideoRecordForm from '../components/record/VideoRecordForm.jsx';


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={VideoInformationRecords}/>
            <Route path="/view:id" component={VideoRecord} />
            <Route path="/edit:id" component={VideoRecordForm} />
        </Route>
    </Router>
), document.getElementById("app"));