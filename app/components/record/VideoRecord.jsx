import React from 'react';
import VideoRecordsStore from '../../stores/VideoRecordsStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class VideoRecord extends React.Component {
    constructor(props) {
        super(props);
    }
    
    static getStores() {
        return [VideoRecordsStore];
    }

    static getPropsFromStores() {
        return VideoRecordsStore.getState().videoRecord;
    }

    componentDidMount() {
        VideoRecordsStore.getVideoRecord(this.props.id);
    }

    render() {
        let videoRecord = this.props.videoRecord;
        if (videoRecord == null) {
            return (
                <Error message="Could not load video snapshot." />
            );
        } else {
            return renderRecord(videoRecord);
        }
    }
    
    renderRecord(videoRecord) {
        return (
                <div>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={0}
                        transitionAppear={modified}
                        transitionAppearTimeout={modified ? 1500 : 0}>
                        <div className="jumbotron center-text">
                            <h1>{videoRecord.title}</h1>
                            <p>{videoRecord.description}</p>
                            <p>
                            <img className="img-responsive" src={videoRecord.snapshotUrl} alt={videoRecord.title} />
                            </p>
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
    }
}

VideoRecord.propTypes = { 
    id: React.PropTypes.string,
    modified: React.PropTypes.bool
};
VideoRecord.defaultProps = { id: null };

export default connectToStores(VideoRecord);