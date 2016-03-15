import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import VideoRecordsStore from '../../stores/VideoRecordsStore.js';
import VideoRecordList from './VideoRecordList.jsx';
import Pagination from '../Pagination.jsx';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class VideoInformationRecords extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page: 0          
        }
        this.pageSize = 5;
    }

    static getStores() {
        return [VideoRecordsStore];
    }

    static getPropsFromStores() {
        return VideoRecordsStore.getState().videoRecords;
    }

    componentDidMount() {
        VideoRecordsStore.fetchVideoRecords(this.state.page, this.pageSize);
    }
    
    onPageChange(i) {
       if (i != this.state.page)
       {
           //VideoRecordsStore.fetchVideoRecords(i);
       }
    }

    render() {
        return (
            <div>
                <VideoRecordList videoRecords={this.props.videoRecords}/>
                <Pagination 
                    page={this.state.page} 
                    totalPages={this.props.totalPages} 
                    onPageChange={this.onPageChange.bind(this)}/>
            </div>
        );
    }
}

export default connectToStores(VideoInformationRecords);