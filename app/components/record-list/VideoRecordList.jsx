import React from 'react';
import VideoRecordListItem from './VideoRecordListItem.jsx';
import Error from '../Error.jsx';

export default class VideoRecordList extends React.Component {
    constructor(props) {
        super(props);
    }

    onDelete(id) {
        if (this.props.onDelete) {
            this.props.onDelete(id);
        }
    }

    render() {
        if (this.props.videoRecordsList == null) {
            return (
                <Error message="Video records list is empty" />
            );
        }
        else {
            return (
                <div>
                    {this.props.videoRecordsList.map((videoRecord) => {
                        return <VideoRecordListItem
                            videoRecord={videoRecord}
                            key={videoRecord.id}
                            onDelete={this.onDelete.bind(this) }/>
                    }) }
                </div>
            );
        }
    }
}

VideoRecordList.propTypes = {
    videoRecordsList: React.PropTypes.array,
    onDelete: React.PropTypes.func
};
VideoRecordList.defaultProps = { videoRecordsList: null };
