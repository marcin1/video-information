import React from 'react';
import VideoRecordListItem from './VideoRecordListItem.jsx';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class VideoRecordList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.videoRecordsList == null) {
            return (
                <div>
                    <div className="alert alert-warning" role="alert">Video records list is empty</div>
                </div>
            );
        }
        else {
            return (
                <div>
                        {this.props.videoRecordsList.map((videoRecord) => {
                            return <VideoRecordListItem videoRecord={videoRecord} key={videoRecord.id} />
                        }) }
                </div>
            );
        }
    }
}

VideoRecordList.propTypes = { 
    videoRecordsList: React.PropTypes.object
};
VideoRecordList.defaultProps = { videoRecordsList:null };
