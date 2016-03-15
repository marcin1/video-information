import React from 'react';
import VideoRecordsStore from '../../stores/VideoRecordsStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import Error from '../Error.jsx';
import { Link } from 'react-router';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class ViewRecord extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores() {
        return [VideoRecordsStore];
    }

    static getPropsFromStores() {
        return VideoRecordsStore.getState();
    }

    componentDidMount() {
        VideoRecordsStore.getVideoRecord(this.props.params.id);
    }

    render() {
        let videoRecord = this.props.videoRecord;
        if (videoRecord == null) {
            return (
                <Error message="Could not load video snapshot." />
            );
        } else {
            return this.renderRecord(videoRecord);
        }
    }

    renderRecord(videoRecord) {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}
                    transitionAppear={this.props.params.modified ? true : false}
                    transitionAppearTimeout={this.props.params.modified ? 1500 : 0}>
                    <div className="jumbotron center-text">
                        <h1>{videoRecord.title}</h1>
                        <p>{videoRecord.description}</p>
                        <p>
                            <img className="img-responsive" src={videoRecord.snapshotUrl} alt={videoRecord.title} />
                        </p>
                    </div>
                </ReactCSSTransitionGroup>
                <div className="break">
                    <div className="pull-right">
                        <Link to={'/edit/' + videoRecord.id} className="btn btn-default" role="button">
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
                        </Link>
                        <Link to="/" className="btn btn-default">Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

ViewRecord.propTypes = {
    id: React.PropTypes.string,
    modified: React.PropTypes.bool
};
ViewRecord.defaultProps = { id: null };

export default connectToStores(ViewRecord);